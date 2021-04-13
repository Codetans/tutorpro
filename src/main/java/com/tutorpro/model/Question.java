package com.tutorpro.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Question {
    @Id
    private Integer questionId;
    private Integer gradeLevel;
    private String question;
    private String subject;
    private String reference;

    public Integer getQuestionId() {
        return questionId;
    }
    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public Integer getGradeLevel() {return gradeLevel;}
    public void setGradeLevel(Integer gradeLevel) {this.gradeLevel = gradeLevel;}

    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }

    public String getSubject() {
        return subject;
    }
    public void setSubject(String subjectId) {
        this.subject = subjectId;
    }

    public String getReference() {
        return reference;
    }
    public void setReference(String reference) {
        this.reference = reference;
    }
}
