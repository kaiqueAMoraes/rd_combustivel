package br.com.rd.Backend.interfaces;


import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.models.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CategoryInterface {

    ResponseEntity save(CategoryDTO categoryDTO);

    ResponseEntity deleteById(Long id);

    ResponseEntity findById(Long id);

    ResponseEntity findByName(String name);

    ResponseEntity<List<Category>> findAll();

    ResponseEntity update(CategoryDTO categoryDTO);

}
