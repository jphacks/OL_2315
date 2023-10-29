package sns

import (
	"context"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_sns"

	"github.com/google/uuid"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *snsService) CreateLike(ctx context.Context, request *grpc_sns.Like) (*grpc_sns.Like, error) {
	like := &model.Like{
		UUID:          uuid.New().String(),
		PostCommentID: request.PostCommentId,
		UserID:        request.UserId,
		PostID:        request.PostId,
	}
	err := s.db.CreateLike(like)
	if err != nil {
		return nil, err
	}

	return &grpc_sns.Like{
		Uuid:          like.UUID,
		PostCommentId: like.PostCommentID,
		UserId:        like.UserID,
		PostId:        like.PostID,
	}, nil
}

func (s *snsService) GetLikeById(ctx context.Context, request *grpc_sns.ID) (*grpc_sns.Like, error) {
	like, err := s.db.GetLikeById(request.Id)
	if err != nil {
		return nil, err
	}

	return &grpc_sns.Like{
		Uuid:          like.UUID,
		PostCommentId: like.PostCommentID,
		UserId:        like.UserID,
		PostId:        like.PostID,
	}, nil
}

func (s *snsService) DeleteLike(ctx context.Context, request *grpc_sns.ID) (*emptypb.Empty, error) {
	err := s.db.DeleteLike(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
