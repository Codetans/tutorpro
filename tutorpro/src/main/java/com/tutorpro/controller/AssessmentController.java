package com.tutorpro.controller;

import com.tutorpro.model.Assessment;
import com.tutorpro.model.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/assessments")
public class AssessmentController {
    @Autowired
    AssessmentRepository assessmentRepository;

    @GetMapping(path="/getAssessment", produces = "application/json")
    public @ResponseBody
    Object getAssessment(@RequestBody Assessment assessment) {
        return assessmentRepository.studentAssessments(assessment.getStudentID());
    }
}
