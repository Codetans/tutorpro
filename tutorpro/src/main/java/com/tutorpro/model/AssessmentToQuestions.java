package com.tutorpro.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AssessmentToQuestions {
    @Id
    private int assessmentToQuestionID;
    private String assessmentID;
    private int questionID;

    public Integer getAssessmentToQuestionID() {
        return assessmentToQuestionID;
    }
    public void setAssessmentToQuestionID(Integer assessmentToQuestionID) {this.assessmentToQuestionID = assessmentToQuestionID;}

    public String getAssessmentID() {
        return assessmentID;
    }
    public void setAssessmentID(String assessmentID) {
        this.assessmentID = assessmentID;
    }

    public Integer getQuestionID() {
        return questionID;
    }
    public void setQuestionID(Integer questionID) {
        this.questionID = questionID;
    }

}
