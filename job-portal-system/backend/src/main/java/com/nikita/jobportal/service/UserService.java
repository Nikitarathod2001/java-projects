package com.nikita.jobportal.service;

import com.nikita.jobportal.entity.User;
import com.nikita.jobportal.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User registerUser(User user) {
    if(userRepository.existsByEmail(user.getEmail())) {
      throw new RuntimeException("Email already registered");
    }
    
    return userRepository.save(user);
  }
  
}
