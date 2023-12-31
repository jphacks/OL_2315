package model

import (
	"time"
)

type User struct {
	UserUUID   string `gorm:"primary_key"`
	AuthSub    string `gorm:"unique"`
	Handle     string
	ScreenName string
	Bio        string
	CreatedAt  time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	UpdatedAt  time.Time
	Role       Role `gorm:"default:USER"`
}

type Post struct {
	PostUUID  string `gorm:"primary_key"`
	UserID    string
	Body      string
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	UpdatedAt time.Time
	IsPublic  bool `gorm:"default:false"`
}

type Comment struct {
	UUID      string `gorm:"primary_key"`
	Content   string
	UserID    string
	PostID    string
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	UpdatedAt time.Time
}

type Like struct {
	UUID          string `gorm:"primary_key"`
	PostCommentID string
	UserID        string
	PostID        string
	CreatedAt     time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}

type Follow struct {
	UUID       string `gorm:"primary_key"`
	FollowerID string
	FolloweeID string
	CreatedAt  time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}

type Fund struct {
	UUID      string `gorm:"primary_key"`
	UserID    string
	PostID    string
	Amount    float32
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	UpdatedAt time.Time
}

type Role string

const (
	RoleUser  Role = "USER"
	RoleAdmin Role = "ADMIN"
)

func (r Role) String() string {
	return string(r)
}

func (r Role) Int32() int32 {
	switch r {
	case RoleUser:
		return 0
	case RoleAdmin:
		return 1
	default:
		return -1
	}
}

func (r Role) ConvertIntToRole() Role {
	switch r.Int32() {
	case 0:
		return RoleUser
	case 1:
		return RoleAdmin
	default:
		return RoleUser
	}
}
