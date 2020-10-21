package com.tutorpro.model;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByEmailAndPassword(String email, String password);
}
