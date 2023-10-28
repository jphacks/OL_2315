package fund

import (
	"jphacks2023-ol2315/lib/grpc_fund"

	"gorm.io/gorm"
)

func NewFundService(db *gorm.DB) *fundService {
	return &fundService{
		db: db,
	}
}

type fundService struct {
	grpc_fund.UnimplementedFundServiceServer
	db *gorm.DB
}
