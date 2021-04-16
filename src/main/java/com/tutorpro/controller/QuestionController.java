package com.tutorpro.controller;

import com.tutorpro.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="question")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;
    Question question = new Question();

    @PostMapping(path = "/createQuestion")
    @ResponseBody
    public String createQuestion(@RequestBody Question newQuestion) {
        question.setQuestionId(newQuestion.getQuestionId());
        question.setGradeLevel(newQuestion.getGradeLevel());
        question.setQuestion(newQuestion.getQuestion());
        question.setSubject(newQuestion.getSubject());
        question.setReference(newQuestion.getReference());
        questionRepository.save(question);
        return "Saved";
    }

    @GetMapping(path = "/getAllQuestions")
    @ResponseBody
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
