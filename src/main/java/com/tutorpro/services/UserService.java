package com.tutorpro.services;

import com.tutorpro.model.*;
import com.tutorpro.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private ParentRepository parentRepository;

    int userId = 0;
    User user = new User();
    Student student = new Student();
    Teacher teacher = new Teacher();
    Parent parent = new Parent();
    PasswordEncoderGenerator passwordEncoderGenerator = new PasswordEncoderGenerator();
    boolean saved = false;
    String userCreationResult = "";
    String userEmail = "";

    public void deleteUser(String email) {
        User user = userRepository.findByEmail(email);
        userRepository.deleteById(user.getId());
        String getUserType = user.getUserType();
        if (getUserType.equals("student")) {
            int studentId = studentRepository.getStudentIdByUserId(user.getId());
            studentRepository.deleteById(studentId);
        } else if (getUserType == "teacher") {
            int teacherId = teacherRepository.getTeacherIdByUserId(user.getId());
            teacherRepository.deleteById(teacherId);
        } else if (getUserType == "parent") {
            int parentId = parentRepository.getParentIdByUserId(user.getId());
            parentRepository.deleteById(parentId);
        }
    }

    public String createNewUser(User newUser) {

        try {
            userEmail = userRepository.findByEmail(newUser.getEmail()).getEmail();
        } catch (NullPointerException n) { }

        if( userEmail.equalsIgnoreCase(newUser.getEmail()) ) {
            return userCreationResult = "User already exists";
        }

        try {
            userId = userRepository.userIdMax();
            userId+=1;
        } catch(Exception e) {
            userId+=1;
        }

        user.setId(userId);
        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setPassword(passwordEncoderGenerator.hashPassword(newUser.getPassword()));
        user.setUserType(newUser.getUserType());
        userRepository.save(user);
        if(saveUserType(newUser.getUserType())){
            userCreationResult = "User created successfully";
        }

        return userCreationResult;
    }

    public Object authenticateUserCredentials(User userInfo) {
        try {
            user = userRepository.findByEmail(userInfo.getEmail());
            if (passwordEncoderGenerator.authenticateUser(userInfo.getPassword(), user.getPassword())) {
                HashMap mainUserInfo = new HashMap<>();
                mainUserInfo.put("userEmail", user.getEmail());
                mainUserInfo.put("userName", user.getName());
                mainUserInfo.put("userType", user.getUserType());
                mainUserInfo.put("userId", user.getId());
                return mainUserInfo;
            } else {
                return "Username or password is incorrect";
            }
        } catch (Exception e){
            return "Username or password is incorrect";
        }
    }

    private boolean saveUserType(String userType) {
        switch (userType) {
            case "student":
                int studentId = 0;
                try {
                    studentId = studentRepository.max();
                    studentId+=1;
                } catch(Exception e) {
                    studentId+=1;
                }
                student.setStudentID(studentId);
                student.setUserID(userId);
                studentRepository.save(student);
                saved = true;
                break;
            case "teacher":
                int teacherId = 0;
                try {
                    teacherId = teacherRepository.max();
                    teacherId+=1;
                } catch(Exception e) {
                    teacherId+=1;
                }
                teacher.setTeacherID(teacherId);
                teacher.setUserID(userId);
                teacherRepository.save(teacher);
                saved = true;
                break;
            case "parent":
                int parentId = 0;
                try {
                    parentId = parentRepository.max();
                    parentId+=1;
                } catch(Exception e) {
                    parentId+=1;
                }
                parent.setParentID(parentId);
                parent.setUserID(userId);
                parentRepository.save(parent);
                saved = true;
                break;
        }
        return saved;
    }
}
