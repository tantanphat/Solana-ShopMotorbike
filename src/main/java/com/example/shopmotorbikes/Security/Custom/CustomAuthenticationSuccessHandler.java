package com.example.shopmotorbikes.Security.Custom;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.shopmotorbikes.Security.jwt.JwtUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final JwtUtils jwtUtils;

    public CustomAuthenticationSuccessHandler(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpServletResponse.SC_OK);


        String username = authentication.getName();
        String token = jwtUtils.generateTokenFromUsername(username);
        DecodedJWT jwt = jwtUtils.decodeJWT(token);

        System.out.println("Token: " + token);
        System.out.println("Payload " + jwt.getPayload() + "\nSignature " + jwt.getSignature() + "\nHeader " + jwt.getHeader()+"\nSubject "+jwt.getSubject());

        Map<String, String> result = new HashMap<>();
        result.put("message", "Chào mừng " + username + " đã quay trở lại");
        result.put("token", token);

        response.setHeader(HttpHeaders.AUTHORIZATION, "Bearer " + token);

        response.getWriter().write(new ObjectMapper().writeValueAsString(result));
    }
}
