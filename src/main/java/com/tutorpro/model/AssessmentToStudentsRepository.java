package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssessmentToStudentsRepository extends CrudRepository<AssessmentToStudents, Integer> {
    @Query(value = "SELECT max(assessment_to_StudentID) FROM assessment_to_students", nativeQuery = true)
    public int assessmentToStudentIdMax();
}
