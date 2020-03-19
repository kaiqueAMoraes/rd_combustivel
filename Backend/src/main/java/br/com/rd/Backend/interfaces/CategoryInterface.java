package br.com.rd.Backend.interfaces;


import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.models.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CategoryInterface {

    ResponseEntity saveCategory (CategoryDTO categoryDTO);

    ResponseEntity deleteCategoryById (Long id);

    ResponseEntity findCategoryById (Long id);

    ResponseEntity findCategoryByName (String name);

    ResponseEntity<List<Category>> findAllCategories ();

    ResponseEntity updateCategory (CategoryDTO categoryDTO);

}
