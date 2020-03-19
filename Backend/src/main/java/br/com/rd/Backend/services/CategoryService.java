package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.interfaces.CategoryInterface;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements CategoryInterface {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public ResponseEntity saveCategory(CategoryDTO categoryDTO) {
        try {
            Category category = new Category();

            if (categoryDTO.getName() == null) {
                return ResponseEntity.badRequest().body("Um dos campos obrigatórios não foi preenchido");

            } else if (categoryRepository.findByName(categoryDTO.getName()).size() != 0) {
                return ResponseEntity.badRequest().body("Esta categoria já está cadastrada");

            } else {
                category.setName(categoryDTO.getName());

                return ResponseEntity.ok().body(categoryRepository.save(category));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        }
    }

    @Override
    public ResponseEntity deleteCategoryById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findCategoryById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findCategoryByName(String name) {
        return null;
    }

    @Override
    public ResponseEntity<List<Category>> findAllCategories() {
        return null;
    }

    @Override
    public ResponseEntity updateCategory(CategoryDTO categoryDTO) {
        return null;
    }
}
