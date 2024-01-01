package com.kidom.backend.dto;

public class SignupRequest {
    private String email;
    private String password;
    private String name;


    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }


    public CharSequence getPassword() {
        return password;
    }
}
