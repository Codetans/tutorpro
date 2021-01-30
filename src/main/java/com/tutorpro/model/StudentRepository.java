package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
    @Query(value = "SELECT max(studentID) FROM student", nativeQuery = true)
    public int max();

    @Query(value = "SELECT studentID FROM student WHERE userID = :userId", nativeQuery = true)
    public int getStudentIdByUserId(int userId);
}
