package com.tutorpro.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Assessment {
    @Id
    private int assessmentID;
    private String name;
    private String description;
    private String subject;
    private String photoName;

    public Integer getAssessmentID() {
        return assessmentID;
    }
    public void setAssessmentID(Integer assessmentID) {
        this.assessmentID = assessmentID;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getPhotoName() {
        return photoName;
    }
    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }
}
