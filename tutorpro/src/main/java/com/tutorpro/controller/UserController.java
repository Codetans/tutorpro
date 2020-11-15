package com.tutorpro.controller;

import com.tutorpro.model.*;
import com.tutorpro.services.PasswordEncoderGenerator;
import org.springframework.aop.AopInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private ParentRepository parentRepository;

    User user = new User();
    int id = 0;

    Student student = new Student();
    Teacher teacher = new Teacher();
    Parent parent = new Parent();

    PasswordEncoderGenerator passwordEncoderGenerator = new PasswordEncoderGenerator();

    @PostMapping(path="/create")
    public @ResponseBody String createUser (@RequestBody User newUser) {
        try {
            id = userRepository.max();
            id+=1;
        } catch(AopInvocationException a) {
            id+=1;
        }

        String userType = newUser.getUserType();

        user.setId(id);
        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setPassword(passwordEncoderGenerator.hashPassword(newUser.getPassword()));
        user.setUserType(newUser.getUserType());
        userRepository.save(user);

        switch (userType) {
            case "student":
                student.setStudentID(id);
                student.setGradeLevel(newUser.getGradeLevel());
                studentRepository.save(student);
                break;
            case "teacher":
                teacher.setTeacherID(id);
                teacherRepository.save(teacher);
                break;
            case "parent":
                parent.setParentID(id);
                parentRepository.save(parent);
                break;
        }

        return "Saved";
    }

    @PostMapping(path="/authenticateUser", produces = "application/json")
    @ResponseBody
    Object authenticateUser(@RequestBody User userInfo) {
        try {
            User user = userRepository.findByEmail(userInfo.getEmail());
            if (passwordEncoderGenerator.authenticateUser(userInfo.getPassword(), user.getPassword())) {
                HashMap mainUserInfo = new HashMap<>();
                mainUserInfo.put("userEmail", user.getEmail());
                mainUserInfo.put("userName", user.getName());
                mainUserInfo.put("userType", user.getUserType());
                return mainUserInfo;
            } else {
                return "Username or password is incorrect";
            }
        } catch (NullPointerException n){
            return "Username or password is incorrect";
        }
    }
}
