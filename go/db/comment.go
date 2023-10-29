package db

import "jphacks2023-ol2315/db/model"

func (d *DB) CreateComment(like *model.Comment) error {
	if err := d.Conn.Create(like).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) GetCommentById(id string) (*model.Comment, error) {
	var comment model.Comment
	if err := d.Conn.Where("uuid = ?", id).First(&comment).Error; err != nil {
		return nil, err
	}
	return &comment, nil
}

func (d *DB) UpdateComment(id string, comment *model.Comment) error {
	if err := d.Conn.Where("uuid = ?", id).Updates(comment).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) DeleteComment(id string) error {
	if err := d.Conn.Where("uuid = ?", id).Delete(&model.Comment{}).Error; err != nil {
		return err
	}
	return nil
}