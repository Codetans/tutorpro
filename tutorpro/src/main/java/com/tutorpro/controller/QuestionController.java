package com.tutorpro.controller;

import com.tutorpro.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="question")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;
    Question question = new Question();

    @PostMapping(path="/createQuestion")
    @ResponseBody
    public String createQuestion (@RequestBody Question newQuestion) {
        question.setQuestionId(newQuestion.getQuestionId());
        question.setGradeLevel(newQuestion.getGradeLevel());
        question.setQuestion(newQuestion.getQuestion());
        question.setAnswer(newQuestion.getAnswer());
        question.setIncorrectAnswer1(newQuestion.getIncorrectAnswer1());
        question.setIncorrectAnswer2(newQuestion.getIncorrectAnswer2());
        question.setIncorrectAnswer3(newQuestion.getIncorrectAnswer3());
        question.setSubjectId(newQuestion.getSubjectId());
        question.setReference(newQuestion.getReference());
        questionRepository.save(question);
        return "Saved";
    }}


