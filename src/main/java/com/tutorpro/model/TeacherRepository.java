package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends CrudRepository<Teacher, Integer> {
    @Query(value = "SELECT max(teacherID) FROM Teacher")
    public int max();

    @Query(value = "SELECT teacherID FROM Teacher WHERE userID = :userId", nativeQuery = true)
    public int getTeacherIdByUserId(int userId);
}
