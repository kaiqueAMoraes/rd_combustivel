package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.interfaces.ProductInterface;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements ProductInterface {

    @Autowired
    ProductRepository productRepository;

    @Override
    public ResponseEntity saveProduct(ProductDTO productDTO) {
    Product product = new Product();

    product.setName(productDTO.getName());
    product.setDescription(productDTO.getDescription());
    product.setImage(productDTO.getImage());
    product.setPrice(productDTO.getPrice());
    product.setQuantStock(productDTO.getQuantStock());

    productRepository.save(product);

    return ResponseEntity.ok().body("Produto criado");
    }

    @Override
    public ResponseEntity deleteProductById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findProductById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findProductByName(String name) {
        return null;
    }

    @Override
    public ResponseEntity<List<Product>> findProductByCategory(ProductDTO productDTO) {
        return null;
    }

    @Override
    public ResponseEntity<List<Product>> findAllProducts() {
        return null;
    }

    @Override
    public ResponseEntity updateProductById(ProductDTO productDTO) {
        return null;
    }
}
