package com.example.shopmotorbikes.Service.Impl;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Model.Dto.LoginDto;
import com.example.shopmotorbikes.Model.Mapper.KhachHangMapper;
import com.example.shopmotorbikes.Repository.KhachHangRepository;
import com.example.shopmotorbikes.Service.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KhachHangServiceImpl implements KhachHangService {
    @Autowired
    private KhachHangRepository khachHangRepository;
    @Autowired
    private KhachHangMapper khachHangMapper;

    @Override
    public KhachHang loginByEmail(String email) {
        return khachHangRepository.findByEmail(email);
    }
}
