package com.tutorpro.controller;

import com.tutorpro.model.Assessment;
import com.tutorpro.model.AssessmentRepository;
import com.tutorpro.model.AssessmentToQuestionsRepository;
import com.tutorpro.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/assessment")
public class AssessmentToQuestionController {
    @Autowired
    AssessmentToQuestionsRepository assessmentToQuestionsRepository;

    @GetMapping(path="/questions", produces = "application/json")
    public @ResponseBody
    Object getAssessmentQuestions(@RequestBody Assessment assessment) {
        List<Question> questions = assessmentToQuestionsRepository.assessmentQuestions(assessment.getAssessmentID());
        return questions;
    }
}
