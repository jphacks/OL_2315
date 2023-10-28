package db

import "jphacks2023-ol2315/db/model"

func (d *DB) CreatePost(post *model.Post) error {
	if err := d.Conn.Create(post).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) GetPostById(id string) (*model.Post, error) {
	var post *model.Post
	if err := d.Conn.Where("post_uuid = ?", id).First(&post).Error; err != nil {
		return nil, err
	}
	return post, nil
}

// TODO
func (d *DB) GetPostsByUserId(id string) ([]*model.Post, error) {
	var posts []*model.Post
	if err := d.Conn.Where("user_id = ?", id).Find(&posts).Error; err != nil {
		return nil, err
	}
	return posts, nil
}

func (d *DB) UpdatePost(post *model.Post) error {
	if err := d.Conn.Save(post).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) DeletePost(id string) error {
	if err := d.Conn.Where("post_uuid = ?", id).Delete(&model.Post{}).Error; err != nil {
		return err
	}
	return nil
}
