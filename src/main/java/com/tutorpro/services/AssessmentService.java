package com.tutorpro.services;

import com.tutorpro.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.PortUnreachableException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class AssessmentService {
    @Autowired
    AssessmentRepository assessmentRepository;
    // @Autowired
    // AssessmentToQuestionsRepository assessmentToQuestionsRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    AssessmentToStudentsRepository assessmentToStudentsRepository;

    Assessment assessment = new Assessment();
    AssessmentToQuestions assessmentToQuestions = new AssessmentToQuestions();
    int asssessmentId = 0;
    int questionId = 0;
    int assessmentToQuestionsId = 0;

    AssessmentToStudents AssessmentToStudents = new AssessmentToStudents();
    int assessmentToStudentID = 0;

    public List<Assessment> getStudentAssessments(int studentId) {
        return assessmentRepository.studentAssessments(studentId);
    }

    public List<Question> getAssessmentQuestions(int assessmentId) {
        List<Question> questions = questionRepository.assessmentQuestions(assessmentId);
        return questions;
    }

    // public String createAssessment(Assessment newAssessment, ArrayList<Question> assessmentQuestions) {
    //     int newAssessmentId = createAssessmentId();
    //     assessment.setAssessmentID(newAssessmentId);
    //     assessment.setSubject(newAssessment.getSubject());
    //     assessment.setName(newAssessment.getName());
    //     assessment.setDescription(newAssessment.getDescription());
    //     assessmentRepository.save(assessment);
    //     for (Question newQuestion : assessmentQuestions) {
    //         questionRepository.save(newQuestion);
    //         createAssessmentToQuestionId();
    //         assessmentToQuestions.setAssessmentToQuestionID(getAsssessmentId());
    //         assessmentToQuestions.setAssessmentID(newAssessmentId);
    //         assessmentToQuestions.setQuestionID(newQuestion.getQuestionId());
    //         assessmentToQuestionsRepository.save(assessmentToQuestions);
    //     }
    //     return "Assessment created successfully";
    // }

    public int createAssessmentId() {
        try {
            asssessmentId = assessmentRepository.assessmentIdMax();
            asssessmentId+=1;
        } catch(Exception e) {
            asssessmentId+=1;
        }

        return asssessmentId;
    }

    public int getAsssessmentId() {
        return asssessmentId;
    }

    public int createQuestionId() {
        try {
            questionId = questionRepository.questionIdMax();
            questionId+=1;
        } catch(Exception e) {
            questionId+=1;
        }
        return questionId;
    }

    // public void createAssessmentToQuestionId() {
    //     try {
    //         assessmentToQuestionsId = assessmentToQuestionsRepository.assessmentToQuestionIdMax();
    //         assessmentToQuestionsId+=1;
    //     } catch(Exception e) {
    //         assessmentToQuestionsId+=1;
    //     }
    // }

    public void deleteAssessment(int asssessmentId) {
        assessmentRepository.deleteById(asssessmentId);
    }

    public void deleteQuestion(int questionId) {
        questionRepository.deleteById(questionId);
    }

    // public void deleteAssessmentToQuestion() {
    //     assessmentToQuestionsRepository.deleteById(assessmentToQuestionsId);
    // }
}
