package user

import (
	"context"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_user"

	"github.com/google/uuid"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *userService) FollowUser(ctx context.Context, request *grpc_user.Follow) (*grpc_user.Follow, error) {
	follow := &model.Follow{
		UUID:       uuid.New().String(),
		FollowerID: request.FollowerId,
		FolloweeID: request.FolloweeId,
		CreatedAt:  request.CreatedAt.AsTime(),
	}
	err := s.db.FollowUser(follow)
	if err != nil {
		return nil, err
	}

	createdAt := timestamppb.New(follow.CreatedAt)

	return &grpc_user.Follow{
		Uuid:       follow.UUID,
		FollowerId: follow.FollowerID,
		FolloweeId: follow.FolloweeID,
		CreatedAt:  createdAt,
	}, nil
}

func (s *userService) GetFollowById(ctx context.Context, request *grpc_user.ID) (*grpc_user.Follow, error) {
	follow, err := s.db.GetFollowById(request.Id)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(follow.CreatedAt)

	return &grpc_user.Follow{
		Uuid:       follow.UUID,
		FollowerId: follow.FollowerID,
		FolloweeId: follow.FolloweeID,
		CreatedAt:  createAt,
	}, nil
}

func (s *userService) DeleteFollow(ctx context.Context, request *grpc_user.ID) (*emptypb.Empty, error) {
	err := s.db.DeleteFollow(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
