package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssessmentToQuestionsRepository extends CrudRepository<AssessmentToQuestions, Integer> {
    @Query(value = "SELECT max(assessment_to_questionID) FROM assessment_to_questions", nativeQuery = true)
    public int assessmentToQuestionIdMax();
}
