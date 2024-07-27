package com.example.shopmotorbikes.Model.Mapper.Impl;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Model.Dto.LoginDto;
import com.example.shopmotorbikes.Model.Mapper.KhachHangMapper;
import org.springframework.stereotype.Component;

@Component
public class KhachHangMapperImpl implements KhachHangMapper {
    @Override
    public LoginDto loginByEmail(KhachHang kh) {
        LoginDto login = new LoginDto();
        login.setEmail(kh.getEmailKh());
        login.setMatKhau(kh.getMatKhau());
        return null;
    }
}
