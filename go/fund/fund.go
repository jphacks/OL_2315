package fund

import (
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/lib/grpc_fund"
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
