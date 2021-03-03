package com.tutorpro.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AssessmentToStudents {
    @Id
    private int assessmentToStudentID;
    private int assessmentID;
    private int studentID;

    public int getAssessmentToStudentID() {
        return assessmentToStudentID;
    }
    public void setAssessmentToStudentID(Integer assessmentToStudentID) {this.assessmentToStudentID = assessmentToStudentID;}

    public int getAssessmentID() {
        return assessmentID;
    }
    public void setAssessmentID(int assessmentID) {
        this.assessmentID = assessmentID;
    }

    public int getStudentID() {
        return studentID;
    }
    public void setStudentID(Integer StudentID) {
        this.studentID = studentID;
    }

}
