package com.kidom.backend.repository;

import com.kidom.backend.entity.User;
import com.kidom.backend.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByEmail(String email);
    User findByRole(UserRole userRole);
}
