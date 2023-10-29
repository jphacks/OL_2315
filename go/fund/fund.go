package fund

import (
	"context"
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/db/model"
	"jphacks2023-ol2315/lib/grpc_fund"
	"time"

	"github.com/google/uuid"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func NewFundService(db *db.DB) *fundService {
	return &fundService{
		db: db,
	}
}

type fundService struct {
	grpc_fund.UnimplementedFundServiceServer
	db *db.DB
}

func (s *fundService) CreateFund(ctx context.Context, request *grpc_fund.Fund) (*grpc_fund.Fund, error) {
	now := time.Now()
	fund := &model.Fund{
		UUID:      uuid.New().String(),
		UserID:    request.UserId,
		PostID:    request.PostId,
		Amount:    request.Amount,
		CreatedAt: now,
		UpdatedAt: now,
	}
	err := s.db.CreateFund(fund)
	if err != nil {
		return nil, err
	}

	createdAt := timestamppb.New(now)
	updatedAt := createdAt

	return &grpc_fund.Fund{
		Uuid:      fund.UUID,
		UserId:    fund.UserID,
		PostId:    fund.PostID,
		Amount:    fund.Amount,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}, nil
}

func (s *fundService) GetFundById(ctx context.Context, request *grpc_fund.ID) (*grpc_fund.Fund, error) {
	fund, err := s.db.GetFundById(request.Id)
	if err != nil {
		return nil, err
	}

	createdAt := timestamppb.New(fund.CreatedAt)
	updatedAt := timestamppb.New(fund.UpdatedAt)

	return &grpc_fund.Fund{
		Uuid:      fund.UUID,
		UserId:    fund.UserID,
		PostId:    fund.PostID,
		Amount:    fund.Amount,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}, nil
}

func (s *fundService) UpdateFund(ctx context.Context, request *grpc_fund.Fund) (*grpc_fund.Fund, error) {
	fund := &model.Fund{
		UUID:      request.Uuid,
		UserID:    request.UserId,
		PostID:    request.PostId,
		Amount:    request.Amount,
		CreatedAt: request.CreatedAt.AsTime(),
		UpdatedAt: request.UpdatedAt.AsTime(),
	}
	err := s.db.UpdateFund(fund.UUID, fund)
	if err != nil {
		return nil, err
	}

	createdAt := timestamppb.New(fund.CreatedAt)
	updatedAt := timestamppb.New(fund.UpdatedAt)

	return &grpc_fund.Fund{
		Uuid:      fund.UUID,
		UserId:    fund.UserID,
		PostId:    fund.PostID,
		Amount:    fund.Amount,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}, nil
}

func (s *fundService) DeleteFund(ctx context.Context, request *grpc_fund.ID) (*emptypb.Empty, error) {
	err := s.db.DeleteFund(request.Id)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
