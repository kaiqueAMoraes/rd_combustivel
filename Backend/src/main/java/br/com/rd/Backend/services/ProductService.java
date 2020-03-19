package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.interfaces.ProductInterface;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProductService implements ProductInterface {

    @Autowired
    ProductRepository productRepository;

    @Override
    public ResponseEntity saveProduct(ProductDTO productDTO) {

        ResponseEntity response = null;

        try {
            if (productDTO.getName() == null ||
                    productDTO.getPrice() == null ||
                    productDTO.getQuantStock() == null
            ) {
                response = ResponseEntity.badRequest().body("Um dos campos obrigatórios não foi preenchido");
            } else {
                Product product = new Product();

                product.setName(productDTO.getName());
                product.setPrice(productDTO.getPrice());
                product.setImage(productDTO.getImage());
                product.setDescription(productDTO.getDescription());
                product.setQuantStock(productDTO.getQuantStock());

                productRepository.save(product);

                response = ResponseEntity.ok().body(product);
            }
        } catch (Exception e) {
            response = ResponseEntity.badRequest().body("Erro: " + e);
        }
        return response;
    }

    @Override
    public ResponseEntity deleteProductById(Long id) {

        try {
            productRepository.deleteById(id);
            return ResponseEntity.ok().body("Produto deletado");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Id do produto incorreto");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        }
    }

    @Override
    public ResponseEntity findProductById(Long id) {
        try {
            if (productRepository.findById(id).isEmpty()) {
                return ResponseEntity.badRequest().body("Id do produto não encontrado");
            } else {
                return ResponseEntity.ok().body(productRepository.findById(id).get());
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        }
    }

    @Override
    public ResponseEntity findProductByName(String name) {
        try {
            if (productRepository.findByName(name).isEmpty()) {
                return ResponseEntity.badRequest().body("Nome do produto não encontrado");
            } else {
                return ResponseEntity.ok().body(productRepository.findByName(name));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        }
    }

    @Override
    public ResponseEntity<List<Product>> findAllProducts() {
        return ResponseEntity.ok().body(productRepository.findAll());
    }

    @Override
    public ResponseEntity updateProductById(@RequestBody ProductDTO productDTO) {
        try {
            Product productEntity = productRepository.getOne(productDTO.getIdProduct());

            productEntity.setName(productDTO.getName());
            productEntity.setDescription(productDTO.getDescription());
            productEntity.setQuantStock(productDTO.getQuantStock());
            productEntity.setPrice(productDTO.getPrice());
            productEntity.setImage(productDTO.getImage());

            productRepository.save(productEntity);

            return ResponseEntity.ok().body(productEntity);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        }
    }
}
