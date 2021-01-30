package com.tutorpro.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Parent {
    @Id
    private Integer parentID;
    private Integer studentID;
    private Integer userID;

    public Integer getParentID() {
        return parentID;
    }

    public void setParentID(Integer parentID) {
        this.parentID = parentID;
    }

    public Integer getStudentID() {
        return studentID;
    }

    public void setStudentID(Integer studentID) {
        this.studentID = studentID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;

    }

}
