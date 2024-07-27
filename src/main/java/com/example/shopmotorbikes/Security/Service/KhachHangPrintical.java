package com.example.shopmotorbikes.Security.Service;

import com.example.shopmotorbikes.Entity.KhachHang;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class KhachHangPrintical implements UserDetails {
    private KhachHang kh;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return kh.getMatKhau();
    }

    @Override
    public String getUsername() {
        return kh.getEmailKh();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Hoặc implement nếu bạn cần kiểm tra thời gian hết hạn tài khoản
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Hoặc implement nếu bạn cần kiểm tra trạng thái khóa tài khoản
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Hoặc implement nếu bạn cần kiểm tra thời gian hết hạn mật khẩu
    }

    @Override
    public boolean isEnabled() {
        return true; // Hoặc implement nếu bạn cần kiểm tra xem tài khoản có đang hoạt động không
    }

}
