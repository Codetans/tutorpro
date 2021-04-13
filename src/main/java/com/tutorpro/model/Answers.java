package com.tutorpro.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Answers {
    @Id
    private Integer answerId;
    private String answer;
    private boolean correct;
    private Integer questionId;

    public Integer getAnswerId() {
        return answerId;
    }
    public void setAnswerId(Integer answerId) {
        this.answerId = answerId;
    }

    public String getAnswer() {
        return answer;
    }
    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public boolean getCorrect() {
        return correct;
    }
    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public Integer getQuestionId() {
        return questionId;
    }
    public void setQuestionId(Integer subject) {
        this.questionId = questionId;
    }
}
