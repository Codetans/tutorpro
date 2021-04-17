package com.tutorpro.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query(value = "SELECT max(id) FROM User")
    public int userIdMax();

    public User findByEmail(String email);

    public List<User> findByUserType(String Type);

}
