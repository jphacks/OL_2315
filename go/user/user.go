package user

import (
	"context"
	"fmt"
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/lib/grpc_user"

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
