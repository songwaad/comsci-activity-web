package com.example.backend.Service;


import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceAction implements UserService {

    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(Integer id) {
        Optional<User> result = userRepository.findById(id);
        User data = null;
        if(result.isPresent()) {
            data = result.get();
        } else {
            throw new RuntimeException("Not found User Id : " + id);
        }

        return data;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }
}
