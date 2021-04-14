package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Integer> {

    @Query(value = "SELECT question_id, grade_level, question, reference, subject\n" +
            "FROM question q\n" +
            "JOIN assessment_to_questions atq\n" +
            "ON q.question_id = atq.questionid\n" +
            "WHERE atq.assessmentid = :assessmentID", nativeQuery = true)
    public List<Question> assessmentQuestions(@Param("assessmentID") int assessmentID);

    @Query(value = "SELECT max(question_id) FROM question", nativeQuery = true)
    public int questionIdMax();

    public List<Question> findAll();
}
