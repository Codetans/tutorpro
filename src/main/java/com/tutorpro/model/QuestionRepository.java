package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Integer> {
    @Query(value = "select * from question q join assessment_to_questions a\n" +
            "on a.questionID = q.question_ID\n" +
            "WHERE a.assessmentID = :assessmentID", nativeQuery = true)
    public List<Question> assessmentQuestions(@Param("assessmentID") int assessmentID);

    @Query(value = "SELECT max(question_id) FROM question", nativeQuery = true)
    public int questionIdMax();
}
