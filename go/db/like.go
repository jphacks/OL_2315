package db

import "jphacks2023-ol2315/db/model"

func (d *DB) CreateLike(like *model.Like) error {
	if err := d.Conn.Create(like).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) GetLikeById(id string) (*model.Like, error) {
	var like model.Like
	if err := d.Conn.Where("uuid = ?", id).First(&like).Error; err != nil {
		return nil, err
	}
	return &like, nil
}

// TODO
func (d *DB) GetLikeByPostId(postId string) ([]*model.Like, error) {
	var likes []*model.Like
	if err := d.Conn.Where("post_id = ?", postId).Find(&likes).Error; err != nil {
		return nil, err
	}
	return likes, nil
}

// TODO
func (d *DB) GetLikeByUserId(userId string) ([]*model.Like, error) {
	var likes []*model.Like
	if err := d.Conn.Where("user_id = ?", userId).Find(&likes).Error; err != nil {
		return nil, err
	}
	return likes, nil
}

func (d *DB) DeleteLike(id string) error {
	if err := d.Conn.Where("uuid = ?", id).Delete(&model.Like{}).Error; err != nil {
		return err
	}
	return nil
}
