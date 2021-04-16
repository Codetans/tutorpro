package com.tutorpro.services;

import com.tutorpro.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AssessmentService {
    @Autowired
    AssessmentRepository assessmentRepository;
    @Autowired
    AssessmentToQuestionsRepository assessmentToQuestionsRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    AnswersRepository answersRepository;

    Assessment assessment = new Assessment();
    AssessmentToQuestions assessmentToQuestions = new AssessmentToQuestions();
    int asssessmentId = 0;
    int questionId = 0;
    int assessmentToQuestionId = 0;

    public List<Assessment> getStudentAssessments(int studentId) {
        return assessmentRepository.studentAssessments(studentId);
    }

    public List<QuestionWithAnswers> getAssessmentQuestions(int assessmentId) {
        List<Question> questions = questionRepository.assessmentQuestions(assessmentId);
        List<QuestionWithAnswers> questionWithAnswers = new ArrayList<>();
        for (Question question : questions) {
            List<Answers> answers = answersRepository.questionAnswers(question.getQuestionId());
            QuestionWithAnswers questionWithAnswer = new QuestionWithAnswers(question.getQuestionId(), question.getGradeLevel(),
                    question.getQuestion(), question.getSubject(), question.getReference(), answers);
            questionWithAnswers.add(questionWithAnswer);
        }
        return questionWithAnswers;
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

    public int createQuestionId() {
        try {
            questionId = questionRepository.questionIdMax();
            questionId+=1;
        } catch(Exception e) {
            questionId+=1;
        }
        return questionId;
    }

    public int createAssessmentToQuestionId() {
        try {
            assessmentToQuestionId = assessmentToQuestionsRepository.assessmentToQuestionIdMax();
            assessmentToQuestionId+=1;
        } catch(Exception e) {
            assessmentToQuestionId+=1;
        }

        return assessmentToQuestionId;
    }

    public void deleteAssessment(int asssessmentId) {
        assessmentRepository.deleteById(asssessmentId);
    }

    public void deleteQuestion(int questionId) {
        questionRepository.deleteById(questionId);
    }

    // public void deleteAssessmentToQuestion() {
    //     assessmentToQuestionsRepository.deleteById(assessmentToQuestionsId);
    // }

    public String createQuiz(AssessmentWithQuestion assessmentWithQuestion) {
        int newAssessmentId = createAssessmentId();
        assessment.setAssessmentID(newAssessmentId);
        assessment.setName(assessmentWithQuestion.getName());
        assessment.setDescription(assessmentWithQuestion.getDescription());
        assessment.setSubject(assessmentWithQuestion.getSubject());
        if (assessmentWithQuestion.getSubject().toLowerCase().equals("math")) {
            assessment.setPhotoName("calculator.jpg");
        } else if (assessmentWithQuestion.getSubject().toLowerCase().equals("science")) {
            assessment.setPhotoName("science.jpg");
        } else if (assessmentWithQuestion.getSubject().toLowerCase().equals("english")) {
            assessment.setPhotoName("english.jpg");
        }
        assessmentRepository.save(assessment);

        List<Integer> questionIds = assessmentWithQuestion.getQuestionIds();
         for(Integer questionId : questionIds) {
             assessmentToQuestions.setAssessmentToQuestionID(createAssessmentToQuestionId());
             assessmentToQuestions.setAssessmentID(newAssessmentId);
             assessmentToQuestions.setQuestionID(questionId);
             assessmentToQuestionsRepository.save(assessmentToQuestions);
         }
         return "Quiz created successfully";
    }
}
