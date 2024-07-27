package com.example.shopmotorbikes.Security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.shopmotorbikes.Security.Service.KhachHangPrintical;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.nio.file.attribute.UserPrincipal;
import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;


@Component
@RequiredArgsConstructor
public class JwtUtils {
    public final JwtProperties  jwtProperties;

    // Tạo ra jwt từ thông tin user
    public String generateTokenFromUsername(String username) {
        return JWT.create()
                .withIssuer("Tấn Phát")
                .withSubject(username)
                .withExpiresAt(Instant.now().plus(1,ChronoUnit.HOURS))
                .withClaim("username", username)
                .sign(Algorithm.HMAC256(jwtProperties.getSecretKey()));
    }

    public DecodedJWT decodeJWT(String token) {
        return JWT.require(Algorithm.HMAC256(jwtProperties.getSecretKey()))
                .withIssuer("Tấn Phát")
               .build()
               .verify(token);
    }




}
