package db

import "jphacks2023-ol2315/db/model"

func (d *DB) GetFollowById(id string) (*model.Follow, error) {
	var follow *model.Follow
	if err := d.Conn.Where("uuid = ?", id).First(&follow).Error; err != nil {
		return nil, err
	}
	return follow, nil
}

func (d *DB) FollowUser(follow *model.Follow) error {
	if err := d.Conn.Create(follow).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) DeleteFollow(id string) error {
	if err := d.Conn.Where("uuid = ?", id).Delete(&model.Follow{}).Error; err != nil {
		return err
	}
	return nil
}
