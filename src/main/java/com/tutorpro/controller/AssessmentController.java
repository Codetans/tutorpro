package com.tutorpro.controller;

import com.tutorpro.model.Assessment;
import com.tutorpro.model.QuestionWithAnswers;
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

    @GetMapping(path="/questions", produces = "application/json")
    public @ResponseBody
    List<QuestionWithAnswers> getAssessmentQuestions(@RequestParam int assessmentId) {
        List<QuestionWithAnswers> questions = assessmentService.getAssessmentQuestions(assessmentId);
        return questions;
    }

    @PostMapping(path="/create")
    public @ResponseBody
    String createAssessment(@RequestBody QuestionWithAnswers questionWithAnswers) {

        return "success";
    }

}
