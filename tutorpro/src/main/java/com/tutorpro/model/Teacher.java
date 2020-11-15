package com.tutorpro.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Teacher {
    @Id
    private Integer teacherID;
    private Integer studentID;

    public Integer getTeacherID() {
        return teacherID;
    }

    public void setTeacherID(Integer teacherID) {
        this.teacherID = teacherID;
    }

    public Integer getStudentID() {
        return studentID;
    }

    public void setStudentID(Integer studentID) {
        this.studentID = studentID;
    }

}
