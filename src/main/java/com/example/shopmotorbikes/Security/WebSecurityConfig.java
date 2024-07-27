package com.example.shopmotorbikes.Security;

import com.example.shopmotorbikes.Security.Custom.CustomAuthenticationFailureHandler;
import com.example.shopmotorbikes.Security.Custom.CustomAuthenticationProvider;
import com.example.shopmotorbikes.Security.Custom.CustomAuthenticationSuccessHandler;
import com.example.shopmotorbikes.Security.Service.UserPrinticalService;
import com.example.shopmotorbikes.Security.jwt.AuthEntryPointJwt;
import com.example.shopmotorbikes.Security.jwt.AuthTokenFilter;
import com.example.shopmotorbikes.Security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.InMemoryTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//@EnableMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserPrinticalService userPrinticalService;
    @Autowired
    private CustomAuthenticationProvider customAuthenticationProvider;
    @Autowired
    private CustomAuthenticationFailureHandler authenticationFailureHandler;
    @Autowired
    private AuthTokenFilter authTokenFilter;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(AbstractHttpConfigurer::disable)
                .addFilterBefore(authTokenFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint(new AuthEntryPointJwt())
                )
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/assets/**","/api/auth/login","/E-StoreX/**").permitAll()
                        .requestMatchers(HttpMethod.GET).permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form
                        .loginPage("/E-StoreX/Login")
                        .loginProcessingUrl("/api/auth/login")
                        .successHandler(new CustomAuthenticationSuccessHandler(jwtUtils))
                        .failureHandler(authenticationFailureHandler)
                        .permitAll()
                )
                .sessionManagement(sessionManagement ->
                        sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .logout(Customizer.withDefaults());

        return http.build();
    }



    @Bean
    public PasswordEncoder noOpPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder =
                http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder
                .authenticationProvider(customAuthenticationProvider)
                .userDetailsService(userPrinticalService)
                .passwordEncoder(noOpPasswordEncoder());
        return authenticationManagerBuilder.build();
    }

    @Bean
    public AuthenticationFailureHandler noOpAuthenticationFailureHandler() {
        return authenticationFailureHandler;
    }
//    @Bean
//    public DaoAuthenticationProvider authenticationProvider(HttpSecurity http) throws Exception {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(userPrinticalService);
//        authProvider.setPasswordEncoder(noOpPasswordEncoder());
//        return authProvider;
//    }
//    @Bean
//    public PersistentTokenRepository persistentTokenRepository() {
//        InMemoryTokenRepositoryImpl memory = new InMemoryTokenRepositoryImpl();
//        return memory;
//    }


}
