package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/create-product")
    public ResponseEntity saveProduct(@RequestBody ProductDTO productDTO) {
        return productService.saveProduct(productDTO);
    }

    @DeleteMapping("/delete-product/{id}")
    public ResponseEntity deleteProductById(@PathVariable("id") Long id) {
        return productService.deleteProductById(id);
    }

    @GetMapping("/find-product/{id}")
    public ResponseEntity findProductById(@PathVariable("id") Long id) {
        return productService.findProductById(id);
    }

    @GetMapping("/find-product-name/{name}")
    public ResponseEntity findProductByName(@PathVariable("name") String name) {
        return productService.findProductByName(name);
    }

    @GetMapping("/find-product-category/{idCategory}")
    public ResponseEntity findProductByIdCategory(@PathVariable("idCategory") Category idCategory) {
        return productService.findProductByIdCategory(idCategory);
    }

    @GetMapping("/find-all-products")
    public ResponseEntity findAllProducts() {
        return productService.findAllProducts();
    }

    @GetMapping("/new-products")
    public ResponseEntity newProducts() {
        return  productService.newProducts();
    }

    @PutMapping("/update-product")
    public ResponseEntity updateProductById(@RequestBody ProductDTO product) {
        return productService.updateProductById(product);
    }
}
