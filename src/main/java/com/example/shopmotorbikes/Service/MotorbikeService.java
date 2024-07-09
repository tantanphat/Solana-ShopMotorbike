package com.example.shopmotorbikes.Service;

import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;

import java.util.List;

public interface MotorbikeService {
    //Lấy tất cả xe
    List<MotorbikeMainDto> getAllMotorbikes();
}
