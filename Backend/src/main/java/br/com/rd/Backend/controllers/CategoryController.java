package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity save(@RequestBody CategoryDTO categoryDTO) {
        return categoryService.save(categoryDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable ("id")Long id) {
        return  categoryService.deleteById(id);
    }

    @GetMapping(value = "/findbyid/{id}", produces = "application/json")
    public ResponseEntity findById(@PathVariable ("id")Long id) {
        return categoryService.findById(id);
    }

    @GetMapping(value = "/findbyname/{name}", produces = "application/json")
    public ResponseEntity findByName(@PathVariable ("name")String name) {
        return categoryService.findByName(name);
    }

    @GetMapping(value = "/findall", produces = "application/json")
    public ResponseEntity findAll(CategoryDTO categoryDTO) {
        return categoryService.findAll();
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    public ResponseEntity update(@RequestBody CategoryDTO categoryDTO) {
        return categoryService.update(categoryDTO);
    }

}
