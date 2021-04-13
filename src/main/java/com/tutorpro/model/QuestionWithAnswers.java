package com.tutorpro.model;

import java.util.ArrayList;
import java.util.List;

public class QuestionWithAnswers {
    public int questionId;
    public int gradeLevel;
    public String question;
    public String subject;
    public String reference;
    public List<Answers> answers;

    public QuestionWithAnswers(Integer questionId, Integer gradeLevel, String question, String subject, String reference, List<Answers> answers) {
        this.questionId = questionId;
        this.gradeLevel = gradeLevel;
        this.question = question;
        this.subject = subject;
        this.reference = reference;
        this.answers = answers;
    }
}
