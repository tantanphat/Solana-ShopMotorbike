package com.example.shopmotorbikes.Security.Custom;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Service.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private KhachHangService khachHangService;
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        final String username = authentication.getName();
        final String password = authentication.getCredentials().toString();

        KhachHang kh = khachHangService.loginByEmail(username);
        if (kh == null) {
            throw new IllegalArgumentException("No user found with email: " + username);
        }
        if (!password.equals(kh.getMatKhau())) {
            throw new IllegalArgumentException("Invalid password for user: " + username);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        Authentication auth =  new UsernamePasswordAuthenticationToken(username, password, authorities);

        return auth;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
