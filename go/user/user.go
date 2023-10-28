package user

import (
	"context"
	"fmt"
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_user"
	"time"

	emptypb "google.golang.org/protobuf/types/known/emptypb"

	"github.com/google/uuid"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func NewUserService(db *db.DB) *userService {
	return &userService{
		db: db,
	}
}

type userService struct {
	grpc_user.UnimplementedUserServiceServer
	db *db.DB
}

func (s *userService) GetUserById(ctx context.Context, request *grpc_user.ID) (*grpc_user.User, error) {
	user, err := s.db.GetUserById(request.Id)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(user.CreatedAt)
	updateAt := timestamppb.New(user.UpdatedAt)
	role := grpc_user.Role(user.Role.Int32())
	if role == -1 {
		return nil, fmt.Errorf("role is not defined")
	}

	return &grpc_user.User{
		UserUuid:   user.UserUUID,
		AuthSub:    user.AuthSub,
		Handle:     user.Handle,
		ScreenName: user.ScreenName,
		Bio:        user.Bio,
		CreatedAt:  createAt,
		UpdatedAt:  updateAt,
		Role:       role,
	}, nil
}

func (s *userService) CreateUser(ctx context.Context, request *grpc_user.User) (*grpc_user.User, error) {
	user := model.User{
		UserUUID:   uuid.New().String(),
		AuthSub:    request.AuthSub,
		Handle:     request.Handle,
		ScreenName: request.ScreenName,
		Bio:        request.Bio,
		Role:       model.Role(request.Role),
	}

	err := s.db.CreateUser(&user)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(time.Now())
	updateAt := createAt
	role := grpc_user.Role(user.Role.Int32())
	if role == -1 {
		return nil, fmt.Errorf("role is not defined")
	}

	return &grpc_user.User{
		UserUuid:   user.UserUUID,
		AuthSub:    user.AuthSub,
		Handle:     user.Handle,
		ScreenName: user.ScreenName,
		Bio:        user.Bio,
		CreatedAt:  createAt,
		UpdatedAt:  updateAt,
		Role:       role,
	}, nil
}

func (s *userService) UpdateUser(ctx context.Context, request *grpc_user.User) (*grpc_user.User, error) {
	now := time.Now()
	user := model.User{
		UserUUID:   request.UserUuid,
		AuthSub:    request.AuthSub,
		Handle:     request.Handle,
		ScreenName: request.ScreenName,
		Bio:        request.Bio,
		CreatedAt:  request.CreatedAt.AsTime(),
		UpdatedAt:  now,
		Role:       model.Role(request.Role),
	}

	err := s.db.UpdateUser(&user)
	if err != nil {
		return nil, err
	}

	createAt := request.CreatedAt
	updateAt := timestamppb.New(now)
	role := grpc_user.Role(user.Role.Int32())
	if role == -1 {
		return nil, fmt.Errorf("role is not defined")
	}

	return &grpc_user.User{
		UserUuid:   user.UserUUID,
		AuthSub:    user.AuthSub,
		Handle:     user.Handle,
		ScreenName: user.ScreenName,
		Bio:        user.Bio,
		CreatedAt:  createAt,
		UpdatedAt:  updateAt,
		Role:       role,
	}, nil
}

func (s *userService) DeleteUser(ctx context.Context, request *grpc_user.ID) (*emptypb.Empty, error) {
	err := s.db.DeleteUser(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
