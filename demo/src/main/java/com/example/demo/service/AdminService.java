package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class AdminService {
    // Dummy admin credentials
    private final String adminEmail = "admin@example.com";
    private final String adminPassword = "admin123";

    public boolean authenticate(String email, String password) {
        return adminEmail.equals(email) && adminPassword.equals(password);
    }
}
