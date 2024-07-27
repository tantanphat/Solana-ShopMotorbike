package com.example.shopmotorbikes.API;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.shopmotorbikes.Model.Dto.LoginDto;
import com.example.shopmotorbikes.Model.Response.LoginRespone;
import com.example.shopmotorbikes.Security.Service.UserPrinticalService;
import com.example.shopmotorbikes.Security.jwt.JwtUtils;
import com.example.shopmotorbikes.Service.KhachHangService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolderStrategy;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping("/api/auth")
//@CrossOrigin(origins = "*",maxAge = 3600)
public class AuthRestController {
    @Autowired
    private KhachHangService khachHangService;

    @Autowired
    private JwtUtils jwtUtils;

    private final AuthenticationManager authenticationManager;

    public AuthRestController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDto loginDto) {
        System.out.println("Hello");
        try {
            Authentication authenticationReq = UsernamePasswordAuthenticationToken.unauthenticated(loginDto.getEmail(), loginDto.getMatKhau());
            Authentication authenticationResp = this.authenticationManager.authenticate(authenticationReq);

            String username = authenticationResp.getName();
            String token = jwtUtils.generateTokenFromUsername(username);
            return ResponseEntity.ok()
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + token)
                    .body("Đăng nhập thành công");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @GetMapping("")
    public ResponseEntity<?> getAllKhachHang(@AuthenticationPrincipal Principal principal, @RequestParam("email") String email) {
        return ResponseEntity.ok(khachHangService.loginByEmail(email));
    }

    @GetMapping("/test")
    public String test() {
        return "Hello";
    }
}
