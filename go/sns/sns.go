package sns

import (
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/lib/grpc_sns"
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
