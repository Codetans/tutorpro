package com.tutorpro.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AssessmentToQuestions {
    @Id
    private int assessmentToQuestionID;
    private int assessmentID;
    private int questionID;

    public int getAssessmentToQuestionID() {
        return assessmentToQuestionID;
    }
    public void setAssessmentToQuestionID(Integer assessmentToQuestionID) {this.assessmentToQuestionID = assessmentToQuestionID;}

    public int getAssessmentID() {
        return assessmentID;
    }
    public void setAssessmentID(int assessmentID) {
        this.assessmentID = assessmentID;
    }

    public Integer getQuestionID() {
        return questionID;
    }
    public void setQuestionID(Integer questionID) {
        this.questionID = questionID;
    }

}
