package user

import (
	"context"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_user"

	"github.com/google/uuid"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

func (s *userService) FollowUser(ctx context.Context, request *grpc_user.Follow) (*grpc_user.Follow, error) {
	follow := &model.Follow{
		UUID:       uuid.New().String(),
		FollowerID: request.FollowerId,
		FolloweeID: request.FolloweeId,
	}
	err := s.db.FollowUser(follow)
	if err != nil {
		return nil, err
	}

	return &grpc_user.Follow{
		Uuid:       follow.UUID,
		FollowerId: follow.FollowerID,
		FolloweeId: follow.FolloweeID,
	}, nil
}

func (s *userService) GetFollowById(ctx context.Context, request *grpc_user.ID) (*grpc_user.Follow, error) {
	follow, err := s.db.GetFollowById(request.Id)
	if err != nil {
		return nil, err
	}

	return &grpc_user.Follow{
		Uuid:       follow.UUID,
		FollowerId: follow.FollowerID,
		FolloweeId: follow.FolloweeID,
	}, nil
}

func (s *userService) DeleteFollow(ctx context.Context, request *grpc_user.ID) (*emptypb.Empty, error) {
	err := s.db.DeleteFollow(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
