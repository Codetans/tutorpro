package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssessmentRepository extends CrudRepository<Assessment, Integer> {
    @Query(value = "SELECT a.assessmentid, a.subject, a.description, a.name, a.photo_name FROM assessment a JOIN assessment_to_students ats ON ats.assessmentid = a.assessmentid WHERE ats.studentid = :studentID", nativeQuery = true)
    public List<Assessment> studentAssessments(@Param("studentID") int studentID);


    @Query(value = "SELECT max(assessmentID) FROM assessment", nativeQuery = true)
    public int assessmentIdMax();
}