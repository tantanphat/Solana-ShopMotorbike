package com.example.shopmotorbikes.Security.Custom;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Service.KhachHangService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Autowired
    private KhachHangService khachHangService;
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String errorMessage= "Lỗi xác thực";

        KhachHang kh = khachHangService.loginByEmail(username);
        if ( kh == null ) {
            errorMessage = "Không tìm thấy người dùng trong hệ thống";
        } else if (exception instanceof BadCredentialsException) {
            errorMessage = "Mật khẩu không chính xác";
        }
        response.getWriter().write("{\"error\": \"" + errorMessage + "\"}");
    }
}
