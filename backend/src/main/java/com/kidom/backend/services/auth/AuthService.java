package com.kidom.backend.services.auth;

import com.kidom.backend.dto.SignupRequest;
import com.kidom.backend.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);

    Boolean hasUserWithEmail(String email);
}
