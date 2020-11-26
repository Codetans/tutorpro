package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AssessmentRepository extends CrudRepository<Assessment, Integer> {
    @Query(value = "select * from assessment a join student s on a.studentID = s.studentID WHERE a.studentID = :studentID", nativeQuery = true)
    public List<Assessment> studentAssessments(@Param("studentID") int studentID);
}
