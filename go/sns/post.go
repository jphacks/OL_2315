package sns

import (
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_sns"
	"time"

	"github.com/google/uuid"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func NewSNSService(db *db.DB) *snsService {
	return &snsService{
		db: db,
	}
}

type snsService struct {
	grpc_sns.UnimplementedSNSServiceServer
	db *db.DB
}

func (s *snsService) GetPostById(request *grpc_sns.ID) (*grpc_sns.Post, error) {
	post, err := s.db.GetPostById(request.Id)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(post.CreatedAt)
	updateAt := timestamppb.New(post.UpdatedAt)

	return &grpc_sns.Post{
		PostUuid:  post.PostUUID,
		UserId:    post.UserID,
		Body:      post.Body,
		CreatedAt: createAt,
		UpdatedAt: updateAt,
		IsPublic:  post.IsPublic,
	}, nil
}

func (s *snsService) CreatePost(request *grpc_sns.Post) (*grpc_sns.Post, error) {
	post := &model.Post{
		PostUUID:  uuid.New().String(),
		UserID:    request.UserId,
		Body:      request.Body,
		CreatedAt: request.CreatedAt.AsTime(),
		UpdatedAt: request.UpdatedAt.AsTime(),
		IsPublic:  request.IsPublic,
	}
	err := s.db.CreatePost(post)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(time.Now())
	updateAt := createAt

	return &grpc_sns.Post{
		PostUuid:  post.PostUUID,
		UserId:    post.UserID,
		Body:      post.Body,
		CreatedAt: createAt,
		UpdatedAt: updateAt,
		IsPublic:  post.IsPublic,
	}, nil
}

func (s *snsService) UpdatePost(request *grpc_sns.Post) (*grpc_sns.Post, error) {
	post := &model.Post{
		PostUUID:  request.PostUuid,
		UserID:    request.UserId,
		Body:      request.Body,
		CreatedAt: request.CreatedAt.AsTime(),
		UpdatedAt: request.UpdatedAt.AsTime(),
		IsPublic:  request.IsPublic,
	}
	err := s.db.UpdatePost(post)
	if err != nil {
		return nil, err
	}

	createAt := timestamppb.New(time.Now())
	updateAt := createAt

	return &grpc_sns.Post{
		PostUuid:  post.PostUUID,
		UserId:    post.UserID,
		Body:      post.Body,
		CreatedAt: createAt,
		UpdatedAt: updateAt,
		IsPublic:  post.IsPublic,
	}, nil
}

func (s *snsService) DeletePost(request *grpc_sns.ID) (*emptypb.Empty, error) {
	err := s.db.DeletePost(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
