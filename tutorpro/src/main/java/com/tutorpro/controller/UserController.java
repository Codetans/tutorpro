package com.tutorpro.controller;

import com.tutorpro.model.*;
import com.tutorpro.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserCreationService userCreationService;

    @PostMapping(path="/create")
    public @ResponseBody
    String createUser (@RequestBody User newUser) {
        return userCreationService.createNewUser(newUser);
    }

    @PostMapping(path="/authenticateUser", produces = "application/json")
    @ResponseBody
    Object authenticateUser(@RequestBody User userInfo) {
        return userCreationService.authenticateUserCredentials(userInfo);
    }
}
