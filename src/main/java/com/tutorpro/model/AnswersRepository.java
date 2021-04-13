package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswersRepository extends CrudRepository<Answers, Integer> {

    @Query(value = "SELECT a.answer_id, a.answer, a.correct, a.question_id FROM answers a\n" +
            "JOIN question q ON a.question_id = q.question_id\n" +
            "WHERE a.question_id = :questionId", nativeQuery = true)
    public List<Answers> questionAnswers(@Param("questionId") int questionId);

    @Query(value = "SELECT max(question_id) FROM question", nativeQuery = true)
    public int questionIdMax();
}
