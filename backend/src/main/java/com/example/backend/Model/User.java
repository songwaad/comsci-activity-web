package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String email;

    private String password;

    private String role;
}
