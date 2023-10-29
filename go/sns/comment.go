package sns

import (
	"context"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_sns"
	"time"

	"github.com/google/uuid"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *snsService) GetCommentById(ctx context.Context, request *grpc_sns.ID) (*grpc_sns.Comment, error) {
	comment, err := s.db.GetCommentById(request.Id)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(comment.CreatedAt)
	updateAt := timestamppb.New(comment.UpdatedAt)

	return &grpc_sns.Comment{
		Uuid:      comment.UUID,
		UserId:    comment.UserID,
		Content:   comment.Content,
		CreatedAt: createAt,
		UpdatedAt: updateAt,
		PostId:    comment.PostID,
	}, nil
}

func (s *snsService) CreateComment(ctx context.Context, request *grpc_sns.Comment) (*grpc_sns.Comment, error) {
	now := time.Now()
	comment := &model.Comment{
		UUID:      uuid.New().String(),
		PostID:    request.PostId,
		UserID:    request.UserId,
		Content:   request.Content,
		CreatedAt: now,
		UpdatedAt: now,
	}
	err := s.db.CreateComment(comment)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(now)
	updateAt := createAt

	return &grpc_sns.Comment{
		Uuid:      comment.UUID,
		UserId:    comment.UserID,
		Content:   comment.Content,
		CreatedAt: createAt,
		UpdatedAt: updateAt,
		PostId:    comment.PostID,
	}, nil
}

func (s *snsService) UpdateComment(ctx context.Context, request *grpc_sns.Comment) (*grpc_sns.Comment, error) {
	comment := &model.Comment{
		UUID:      request.Uuid,
		PostID:    request.PostId,
		UserID:    request.UserId,
		Content:   request.Content,
		CreatedAt: request.CreatedAt.AsTime(),
		UpdatedAt: request.UpdatedAt.AsTime(),
	}
	err := s.db.UpdateComment(comment.UUID, comment)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(time.Now())
	updateAt := createAt

	return &grpc_sns.Comment{
		Uuid:      comment.UUID,
		UserId:    comment.UserID,
		Content:   comment.Content,
		CreatedAt: createAt,
		UpdatedAt: updateAt,
		PostId:    comment.PostID,
	}, nil
}

func (s *snsService) DeleteComment(ctx context.Context, request *grpc_sns.ID) (*emptypb.Empty, error) {
	err := s.db.DeleteComment(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
