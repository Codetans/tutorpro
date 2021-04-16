package com.tutorpro.model;

import java.util.List;

public class AssessmentWithQuestion {
    public String name;
    public String description;
    public String subject;
    public List<Integer> questionIds;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getSubject() {
        return subject;
    }

    public List<Integer> getQuestionIds() {
        return questionIds;
    }

}
