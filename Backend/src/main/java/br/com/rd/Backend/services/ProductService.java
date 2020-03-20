package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.ProductInterface;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
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
            if ((productRepository.findByName(productDTO.getName()).size() != 0) &&
                    (productRepository.findByDescription(productDTO.getDescription()).size() != 0)) {
                return ResponseEntity.badRequest().body("Este produto já está cadastrado");
            } else {

                Converter converter = new Converter();

                Product product = converter.converterTo(productDTO);

                response = ResponseEntity.ok().body(productRepository.save(product));

            }
        } catch (DataIntegrityViolationException e) {
            response = ResponseEntity.badRequest().body("Um ou mais campos obrigatórios não foram preenchidos " + e.getMessage());
        }
        return response;
    }

    @Override
    public ResponseEntity deleteProductById(Long id) {

        try {
            productRepository.deleteById(id);
            return ResponseEntity.ok().body("Produto deletado");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Id do produto não existe");
        }
    }

    @Override
    public ResponseEntity findProductById(Long id) {

        if (productRepository.findById(id).isEmpty()) {
            return ResponseEntity.badRequest().body("Id do produto não encontrado");
        } else {
            return ResponseEntity.ok().body(productRepository.findById(id).get());
        }
    }

    @Override
    public ResponseEntity findProductByName(String name) {

        if (productRepository.findByName(name).isEmpty()) {
            return ResponseEntity.badRequest().body("Este produto não existe");
        } else {
            return ResponseEntity.ok().body(productRepository.findByName(name));
        }

    }

    @Override
    public ResponseEntity findProductByIdCategory(Category idCategory) {

        if (productRepository.findByIdCategory(idCategory).isEmpty()) {
            return ResponseEntity.badRequest().body("Não existem produtos nesta categoria");
        } else {
            return ResponseEntity.ok().body(productRepository.findByIdCategory(idCategory));
        }

    }

    @Override
    public ResponseEntity<List<Product>> findAllProducts() {
        return ResponseEntity.ok().body(productRepository.findAll());
    }

    @Override
    public ResponseEntity updateProductById(@RequestBody ProductDTO productDTO) {
        try {
            Product product = productRepository.getOne(productDTO.getIdProduct());

            product.setName(productDTO.getName());
            product.setDescription(productDTO.getDescription());
            product.setQuantStock(productDTO.getQuantStock());
            product.setPrice(productDTO.getPrice());
            product.setImage(productDTO.getImage());

            productRepository.save(product);

            return ResponseEntity.ok().body(product);

        } catch (InvalidDataAccessApiUsageException e) {
            return ResponseEntity.badRequest().body("O Id do produto não foi informado na requisição");
        }
    }

}
