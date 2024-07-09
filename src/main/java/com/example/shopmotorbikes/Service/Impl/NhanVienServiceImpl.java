package com.example.shopmotorbikes.Service.Impl;

import com.example.shopmotorbikes.Entity.NhanVien;
import com.example.shopmotorbikes.Model.Dto.NhanVienDto;
import com.example.shopmotorbikes.Model.Mapper.NhanVienMapper;
import com.example.shopmotorbikes.Repository.NhanVienRepository;
import com.example.shopmotorbikes.Service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NhanVienServiceImpl implements NhanVienService {
    @Autowired
    private NhanVienRepository nhanVienRepository;
    @Autowired
    private NhanVienMapper nhanVienMapper;


    @Override
    public List<NhanVienDto> getNhanVienDtoList() {
        return nhanVienRepository.findAll().stream().map(nhanVienMapper::nhanVienToNhanVienDto).collect(Collectors.toList());
    }

}
