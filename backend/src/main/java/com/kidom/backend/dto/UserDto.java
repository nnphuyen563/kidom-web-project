package com.kidom.backend.dto;
import com.kidom.backend.enums.UserRole;
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private UserRole userRole;

    public void setId(Long id) {
    }
}
