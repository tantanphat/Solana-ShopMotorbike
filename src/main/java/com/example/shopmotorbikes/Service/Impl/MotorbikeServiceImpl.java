package com.example.shopmotorbikes.Service.Impl;

import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;
import com.example.shopmotorbikes.Model.Mapper.MotorbikeMapper;
import com.example.shopmotorbikes.Repository.MotorbikeRepository;
import com.example.shopmotorbikes.Service.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MotorbikeServiceImpl implements MotorbikeService {

    @Autowired
    private MotorbikeRepository motorbikeRepository;
    @Autowired
    private MotorbikeMapper motorbikeMapper;


    @Override
    public List<MotorbikeMainDto> getAllMotorbikes() {
        return motorbikeRepository.findAll().stream().map(motorbikeMapper::motorbikeToMotorbikDto).collect(Collectors.toList());
    }

    @Override
    public Optional<MotorbikeMainDto> getOneMotorbike(String maXe) {
        return motorbikeRepository.findById(maXe)
                .map(motorbikeMapper::motorbikeToMotorbikDto)
                .or(() -> {
                    throw new NullPointerException("Motorbike không tồn tại");
                });
    }
     // Lấy xe theo tên
    @Override
    public MotorbikeMainDto getOneMotorbikeByName(String tenXe) {
        return motorbikeRepository.findByName(tenXe)
                .map(motorbikeMapper::motorbikeToMotorbikDto)
                .orElseThrow(() -> new NullPointerException("Motorbike không tồn tại"));
    }
}
