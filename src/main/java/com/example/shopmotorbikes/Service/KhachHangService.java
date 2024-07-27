package com.example.shopmotorbikes.Service;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Model.Dto.LoginDto;

import java.util.Optional;

public interface KhachHangService {

    KhachHang loginByEmail(String email);
}
