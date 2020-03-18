package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/create-product")
    public ResponseEntity saveProduct (ProductDTO productDTO) {
        return productService.saveProduct(productDTO);
    }

}
