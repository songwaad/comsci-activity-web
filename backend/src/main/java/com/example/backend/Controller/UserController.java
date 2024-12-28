package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping("/user")
    public List<User> getAllUser() {
        return userService.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable int id) {
        return userService.findById(id);
    }

    @PostMapping("/user")
    public User addUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PutMapping("/user")
    public User updateUser(@RequestBody User user) {
        return userService.save(user);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable int id) {
        User user = userService.findById(id);
        if(user==null) {
            throw new RuntimeException("Not Found Id : " + id);
        }
        userService.deleteById(id);
        return "Delete User Id :" + id + "Successfully!";
    }
}
