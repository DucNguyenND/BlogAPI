package com.example.demo.repository;

import com.example.demo.model.Category;
import org.springframework.data.repository.CrudRepository;

public interface ICategoryRepo extends CrudRepository<Category, Long> {
}
