package com.example.backend.Security;

import com.example.backend.Service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomUserDetailsService customUserDetailsService;

    // ระบุ PasswordEncoder -> BCrypt
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Spring Security Filter
    // ทุกๆ request ต้อง Auth ยกเว้น "/login" , "/register"
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // ปิด CSRF ก่อน , ทดสอบง่ายๆ
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("register", "login").permitAll() // อยุญาตไม่ต้อง Login
                        .anyRequest().authenticated() // นอกนั้นต้อง login หมด
                )
                .httpBasic(Customizer.withDefaults()); // ใช้ Basic Auth (เบื้องต้น)

        return http.build();

    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(customUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    // ตรงนี้คือจุดสำคัญที่บอก Security ว่า
    // “เวลามีคนพยายาม Login ให้ไปใช้
    // CustomUserDetailsService
    // เพื่อหา user จาก DB นะ และตรวจ password ด้วย BCryptPasswordEncoder นะ”
}
