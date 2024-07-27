package com.example.shopmotorbikes.Security.Service;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Model.Dto.LoginDto;
import com.example.shopmotorbikes.Model.Mapper.KhachHangMapper;
import com.example.shopmotorbikes.Service.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserPrinticalService implements UserDetailsService {
    @Autowired
    private KhachHangService khachHangService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        KhachHang khachHang = khachHangService.loginByEmail(username);
        if (khachHang == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new KhachHangPrintical(khachHang);
    }
}
