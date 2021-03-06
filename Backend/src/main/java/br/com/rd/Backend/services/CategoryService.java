package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.CategoryInterface;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolationException;
import java.util.List;

@Service
public class CategoryService implements CategoryInterface {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public ResponseEntity saveCategory(CategoryDTO categoryDTO) {
        try {
            if (categoryRepository.findByName(categoryDTO.getName()).size() != 0) {
                return ResponseEntity.badRequest().body("Esta categoria já foi cadastrada");

            } else {
                Converter converter = new Converter();
                Category category = converter.converterTo(categoryDTO);
                return ResponseEntity.ok().body(categoryRepository.save(category));
            }
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Um ou mais campos obrigatórios não foram preenchidos ");
        }  catch (ConstraintViolationException e) {
            return ResponseEntity.badRequest().body("Um dos campos obrigatórios não foi preenchido");
        }
    }

    @Override
    public ResponseEntity deleteCategoryById(Long id) {
        try {
            categoryRepository.deleteById(id);
            return ResponseEntity.ok().body("Categoria " + id + " deletada");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Id da categoria não existe");
        }
    }

    @Override
    public ResponseEntity findCategoryById(Long id) {
        try {
            if (categoryRepository.findById(id).isEmpty()) {
                return ResponseEntity.badRequest().body("Id da categoria não encontrado");
            } else {
                return ResponseEntity.ok().body(categoryRepository.findById(id).get());
            }
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Foram enviados campos nulos");
        }
    }

    @Override
    public ResponseEntity findCategoryByName(String name) {
        try {
            if (categoryRepository.findByName(name).isEmpty()) {
                return ResponseEntity.badRequest().body("Categoria não encontrada");
            } else {
                return ResponseEntity.ok().body(categoryRepository.findByName(name));
            }
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Foram enviados campos nulos");
        }
    }

    @Override
    public ResponseEntity<List<Category>> findAllCategories() {
        return ResponseEntity.ok().body(categoryRepository.findAll());
    }

    @Override
    public ResponseEntity updateCategory(CategoryDTO categoryDTO) {
        try {
            Category category = categoryRepository.getOne(categoryDTO.getIdCategory());

            if (categoryDTO.getName() != null) {
                category.setName(categoryDTO.getName());
            }
            return ResponseEntity.ok().body(categoryRepository.save(category));

        } catch (InvalidDataAccessApiUsageException e) {
            return ResponseEntity.badRequest().body("O Id da categoria não foi informado na requisição");
        }
    }
}
