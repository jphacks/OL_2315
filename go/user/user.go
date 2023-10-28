package user

import (
	"jphacks2023-ol2315/lib/grpc_user"

	"gorm.io/gorm"
)

func NewUserService(db *gorm.DB) *userService {
	return &userService{
		db: db,
	}
}

type userService struct {
	grpc_user.UnimplementedUserServiceServer
	db *gorm.DB
}
