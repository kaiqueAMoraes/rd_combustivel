package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.models.Product;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductInterface {

    ResponseEntity saveProduct(ProductDTO productDTO);

    ResponseEntity deleteProductById(Long id);

    ResponseEntity findProductById(Long id);

    ResponseEntity findProductByName(String name);

    ResponseEntity findProductByIdCategory(Category idCategory);

    ResponseEntity<List<Product>> findAllProducts();

    ResponseEntity updateProductById (ProductDTO productDTO);
}
