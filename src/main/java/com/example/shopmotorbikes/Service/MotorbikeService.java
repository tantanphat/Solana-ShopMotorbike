package com.example.shopmotorbikes.Service;

import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;

import java.util.List;
import java.util.Optional;

public interface MotorbikeService {
    //Lấy tất cả xe
    List<MotorbikeMainDto> getAllMotorbikes();

    //Lấy xe theo mã xe
    Optional<MotorbikeMainDto> getOneMotorbike(String maXe);

    //Lấy xe theo tên xe
    MotorbikeMainDto getOneMotorbikeByName(String tenXe);
}
