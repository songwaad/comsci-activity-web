package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Endpoint สำหรับ Register
    // ตัวอย่าง: POST /register (body { "username": "test", "password": "1234" })
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username is already taken!";
        }

        // เข้ารหัส password ก่อนบันทึก
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "Register success!";
    }

    // Endpoint สำหรับ login (optional)
    // ถ้าเราใช้ Basic Auth + Spring Security อาจไม่ต้องมี endpoint นี้ก็ได้
    // แต่ถ้าอยากคืน token (JWT) ก็ต้องเขียน logic เพิ่ม
    @PostMapping("/login")
    public String login() {
        // ถ้าเข้ามาถึงจุดนี้ แสดงว่า login ผ่านแล้ว
        // (ในกรณี Basic Auth, spring จะ handle ให้เอง)
        // ถ้าทำ JWT ก็จะ gen token ตรงนี้
        return "Login success!";
    }

    // ถ้าเราใช้ Basic Auth ล้วน ๆ เพียว ๆ ลองส่ง request แบบ Basic Auth
    // ไปที่ GET /anyendpoint ก็จะเข้า logic ของ Spring Security เอง
    // ไม่ต้องมี /login ก็ได้ครับ

    //แต่ถ้าอยากทำ JWT จะต้องใน login endpoint เป็นจุดตรวจ username/password
    // แล้ว gen JWT กลับไป
}
