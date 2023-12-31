package com.kidom.backend.entity;

import com.kidom.backend.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String name;
    private UserRole role;
    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] img;

    public String getEmail() {
        return email;
    }
    public void getEmail(String newEmail) {
        this.email = newEmail;
    }

    public String getPassword() {
        return password;
    }
    public void getPassword(String newPassword) {
        this.password = newPassword;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
