package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/create-product")
    public ResponseEntity saveProduct (@RequestBody ProductDTO productDTO) {
        return productService.saveProduct(productDTO);
    }

    @DeleteMapping("/delete-product/{id}")
    public ResponseEntity deleteProductById (@PathVariable ("id")Long id) {
        return productService.deleteProductById(id);
    }

    @GetMapping("/find-product/{id}")
    public ResponseEntity findProductById (@PathVariable ("id")Long id) {
        return productService.findProductById(id);
    }

}
