package db

import "jphacks2023-ol2315/db/model"

func (d *DB) CreateFund(fund *model.Fund) error {
	if err := d.Conn.Create(fund).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) GetFundById(id string) (*model.Fund, error) {
	var fund *model.Fund
	if err := d.Conn.Where("uuid = ?", id).First(&fund).Error; err != nil {
		return nil, err
	}
	return fund, nil
}

// TODO
func (d *DB) GetFundsByUserId(id string) ([]*model.Fund, error) {
	var funds []*model.Fund
	if err := d.Conn.Where("user_id = ?", id).Find(&funds).Error; err != nil {
		return nil, err
	}
	return funds, nil
}

func (d *DB) UpdateFund(id string, fund *model.Fund) error {
	if err := d.Conn.Where("uuid = ?", id).Updates(fund).Error; err != nil {
		return err
	}
	return nil
}

func (d *DB) DeleteFund(id string) error {
	if err := d.Conn.Where("uuid = ?", id).Delete(&model.Fund{}).Error; err != nil {
		return err
	}
	return nil
}
