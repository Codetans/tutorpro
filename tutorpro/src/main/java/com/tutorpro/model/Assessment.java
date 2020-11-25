package com.tutorpro.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Assessment {
    @Id
    private int assessmentID;
    private String subject;
    private int studentID;

    public Integer getAssessmentID() {
        return assessmentID;
    }
    public void setAssessmentID(Integer assessmentID) {
        this.assessmentID = assessmentID;
    }

    public String getSubject() {
        return subject;
    }
    public void setSubject(String Subject) {
        this.subject = subject;
    }

    public Integer getStudentID() {
        return studentID;
    }
    public void setStudentID(Integer studentID) {
        this.studentID = studentID;
    }

}
