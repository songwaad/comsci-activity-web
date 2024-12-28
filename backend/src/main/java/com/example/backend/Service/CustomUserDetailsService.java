package com.example.backend.Service;

import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user == null) {
            throw new UsernameNotFoundException("User not found: " + username);
        }

        // สร้าง authorities จาก role (ถ้ามี role)
        // ถ้าไม่ได้ใช้ role-based ก็ใส่ Collections.emptyList() ไปก่อน
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
        // หรือใช้ user.getRole() ถ้ามีเก็บ role จริงๆ

        // Spring Security จะใช้ object UserDetails ในการตรวจสอบ
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                Collections.singletonList(authority)
        );
    }
}
