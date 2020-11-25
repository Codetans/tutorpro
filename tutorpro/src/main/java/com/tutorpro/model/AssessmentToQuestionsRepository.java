package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AssessmentToQuestionsRepository extends CrudRepository<AssessmentToQuestions, Integer> {
    @Query(value = "select * from question q join assessment_to_questions a\n" +
            "on a.questionID = q.question_ID\n" +
            "WHERE a.assessmentID = ?0;", nativeQuery = true)
    public List<Question> studentAssessments(@Param("assessmentID") int assessmentID);

}
