package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.models.Product;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductInterface {

    ResponseEntity save(ProductDTO productDTO);

    ResponseEntity deleteById(Long id);

    ResponseEntity findById(Long id);

    ResponseEntity findByName(String name);

    ResponseEntity findByNameContaining(String name);

    ResponseEntity findByIdCategory(Category idCategory);

    ResponseEntity<List<Product>> findAll();

    ResponseEntity update(ProductDTO productDTO);
}
