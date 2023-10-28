package db

import "jphacks2023-ol2315/db/model"

func (d *DB) GetUserById(id string) (*model.User, error) {
	var user *model.User
	if err := d.Conn.Where("user_uuid = ?", id).First(&user).Error; err != nil {
		return nil, err
	}
	return user, nil

}
