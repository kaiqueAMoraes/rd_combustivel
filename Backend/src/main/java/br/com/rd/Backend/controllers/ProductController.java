package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity save(@RequestBody ProductDTO productDTO) {
        return productService.save(productDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable("id") Long id) {
        return productService.deleteById(id);
    }

    @GetMapping(value = "/findbyid/{id}", produces = "application/json")
    public ResponseEntity findById(@PathVariable("id") Long id) {
        return productService.findById(id);
    }

    @GetMapping(value = "/findbyname/{name}", produces = "application/json")
    public ResponseEntity findByName(@PathVariable("name") String name) {
        return productService.findByName(name);
    }

    @GetMapping(value = "/findbynamecontaining/{name}", produces = "application/json")
    public ResponseEntity findByNameContaining(@PathVariable("name") String name) {
        return productService.findByNameContaining(name);
    }

    @GetMapping(value = "/findbyidcategory/{idCategory}", produces = "application/json")
    public ResponseEntity findByIdCategory(@PathVariable("idCategory") Category idCategory) {
        return productService.findByIdCategory(idCategory);
    }

    @GetMapping(value = "/findall", produces = "application/json")
    public ResponseEntity findAll() {
        return productService.findAll();
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    public ResponseEntity updateProductById(@RequestBody ProductDTO product) {
        return productService.update(product);
    }
}
