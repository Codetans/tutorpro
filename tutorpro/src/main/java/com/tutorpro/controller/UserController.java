package com.tutorpro.controller;

import com.tutorpro.model.User;
import com.tutorpro.model.UserRepository;
import org.springframework.aop.AopInvocationException;
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
    int id = 0;

    @PostMapping(path="/create")
    public @ResponseBody String createUser (@RequestBody User newUser) {
        try {
            id = userRepository.max();
            id+=1;
        } catch(AopInvocationException a) {
            id+=1;
        }

        user.setId(id);
        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setPassword(newUser.getPassword());
        userRepository.save(user);
        return "Saved";
    }

    @PostMapping(path="/authenticateUser")
    public @ResponseBody Boolean authenticateUser(@RequestBody User userInfo) {
        try {
            if(userInfo.getEmail().equalsIgnoreCase(userRepository.findByEmailAndPassword(userInfo.getEmail(), userInfo.getPassword()).getEmail())) {
                return true;
            }
            return false;
        } catch (NullPointerException n) {
            return false;
        }
    }
}
