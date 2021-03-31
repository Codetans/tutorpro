package com.tutorpro.controller;

import com.tutorpro.model.Assessment;
import com.tutorpro.model.Question;
import com.tutorpro.services.AssessmentService;
import com.tutorpro.model.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/assessment")
public class AssessmentController {
    @Autowired
    AssessmentService assessmentService;
    @Autowired
    AssessmentRepository assessmentRepository;

    @GetMapping(path="/getStudentAssessments", produces = "application/json")
    public @ResponseBody
    List<Assessment> getStudentAssessments(@RequestParam int studentID) {
        return assessmentRepository.studentAssessments(studentID);
    }



    @PostMapping(path="/questions", produces = "application/json")
    public @ResponseBody
    List<Question> getAssessmentQuestions(@RequestBody Assessment assessment) {
        List<Question> questions = assessmentService.getAssessmentQuestions(assessment.getAssessmentID());
        return questions;
    }



}
