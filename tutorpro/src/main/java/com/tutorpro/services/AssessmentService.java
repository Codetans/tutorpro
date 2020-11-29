package com.tutorpro.services;

import com.tutorpro.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.PortUnreachableException;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class AssessmentService {
    @Autowired
    AssessmentRepository assessmentRepository;
    @Autowired
    AssessmentToQuestionsRepository assessmentToQuestionsRepository;

    Assessment assessment = new Assessment();
    int asssessmentId = 0;

    public List<Assessment> getStudentAssessments(int studentId) {
        return assessmentRepository.studentAssessments(studentId);
    }

    public List<Question> getAssessmentQuestions(int assessmentId) {
        List<Question> questions = assessmentToQuestionsRepository.assessmentQuestions(assessmentId);
        return questions;
    }

    public String createAssessment(Assessment newAssessment) {
        assessment.setAssessmentID(createAssessmentId());
        assessment.setStudentID(newAssessment.getStudentID());
        assessment.setSubject(newAssessment.getSubject());
        assessment.setName(newAssessment.getName());
        assessment.setDescription(newAssessment.getDescription());
        assessmentRepository.save(assessment);
        return "Assessment created successfully";
    }

    public int createAssessmentId() {
        try {
            asssessmentId = assessmentRepository.assessmentIdMax();
            asssessmentId+=1;
        } catch(Exception e) {
            asssessmentId+=1;
        }

        return asssessmentId;
    }

    public void deleteAssessment(int asssessmentId) {
        assessmentRepository.deleteById(asssessmentId);
    }
}
