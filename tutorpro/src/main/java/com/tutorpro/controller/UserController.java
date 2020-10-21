package com.tutorpro.controller;

import com.tutorpro.model.User;
import com.tutorpro.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    User user = new User();

    @PostMapping(path="/create")
    public @ResponseBody String createUser (@RequestParam String name, String email, String password) {
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        userRepository.save(user);
        return "Saved";
    }

    @GetMapping(path="/authenticateUser")
    public @ResponseBody
    Boolean authenticateUser(@RequestParam String email, String password) {
        try {
            if(email.equalsIgnoreCase(userRepository.findByEmailAndPassword(email, password).getEmail())) {
                return true;
            }
            return false;
        } catch (NullPointerException n) {
            return false;
        }
    }
}
