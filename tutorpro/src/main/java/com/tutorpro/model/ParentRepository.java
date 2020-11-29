package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ParentRepository extends CrudRepository<Parent, Integer> {
    @Query(value = "SELECT max(parentID) FROM Parent")
    public int max();

    @Query(value = "SELECT parentID FROM Parent WHERE userID = :userId", nativeQuery = true)
    public int getParentIdByUserId(int userId);
}
