package sns

import (
	"jphacks2023-ol2315/lib/grpc_sns"

	"gorm.io/gorm"
)

func NewSNSService(db *gorm.DB) *snsService {
	return &snsService{
		db: db,
	}
}

type snsService struct {
	grpc_sns.UnimplementedSNSServiceServer
	db *gorm.DB
}
