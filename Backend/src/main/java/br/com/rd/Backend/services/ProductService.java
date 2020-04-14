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

import javax.validation.ConstraintViolationException;
import java.util.List;

@Service
public class ProductService implements ProductInterface {

    @Autowired
    ProductRepository productRepository;

    @Override
    public ResponseEntity save(ProductDTO productDTO) {
        try {
            if ((!productRepository.findByName(productDTO.getName()).isEmpty()) &&
                    (!productRepository.findByDescription(productDTO.getDescription()).isEmpty()))
                return ResponseEntity.badRequest().body("Este produto já está cadastrado");
              else {
                Converter converter = new Converter();
                Product product = converter.converterTo(productDTO);
                return ResponseEntity.ok().body(productRepository.save(product));
            }
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Um ou mais campos obrigatórios não foram preenchidos " + e.getMessage());
        } catch (ConstraintViolationException e) {
            return ResponseEntity.badRequest().body("Um dos campos obrigatórios não foi preenchido");
        }
    }

    @Override
    public ResponseEntity deleteById(Long id) {
        try {
            productRepository.deleteById(id);
            return ResponseEntity.ok().body("Produto deletado");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Produto não encontrado");
        }
    }

    @Override
    public ResponseEntity findById(Long id) {
        if (productRepository.findById(id).isEmpty())
            return ResponseEntity.badRequest().body("Produto não encontrado");
          else
            return ResponseEntity.ok().body(productRepository.findById(id).get());
    }

    @Override
    public ResponseEntity findByName(String name) {
        if (productRepository.findByName(name).isEmpty())
            return ResponseEntity.badRequest().body("Este produto não existe");
          else
            return ResponseEntity.ok().body(productRepository.findByName(name));
    }

    @Override
    public ResponseEntity findByNameContaining(String name) {
        if (productRepository.findByNameContaining(name).isEmpty())
            return ResponseEntity.badRequest().body("Nenhum produto encontrado");
        else
            return ResponseEntity.ok().body(productRepository.findByNameContaining(name));
    }

    @Override
    public ResponseEntity findByIdCategory(Category idCategory) {
        if (productRepository.findByIdCategory(idCategory).isEmpty())
            return ResponseEntity.badRequest().body("Não existem produtos nesta categoria");
          else
            return ResponseEntity.ok().body(productRepository.findByIdCategory(idCategory));
    }

    @Override
    public ResponseEntity<List<Product>> findAll() {
        return ResponseEntity.ok().body(productRepository.findAll());
    }

    @Override
    public ResponseEntity update(@RequestBody ProductDTO productDTO) {
        try {
            Product product = productRepository.getOne(productDTO.getIdProduct());

            if (productDTO.getName() != null)
                product.setName(productDTO.getName());

            if (productDTO.getDescription() != null)
                product.setDescription(productDTO.getDescription());

            if (productDTO.getQuantStock() != null)
                product.setQuantStock(productDTO.getQuantStock());

            if (productDTO.getPrice() != null)
                product.setPrice(productDTO.getPrice());

            if (productDTO.getImage() != null)
                product.setImage(productDTO.getImage());

            return ResponseEntity.ok().body(productRepository.save(product));

        } catch (InvalidDataAccessApiUsageException e) {
            return ResponseEntity.badRequest().body("O Id do produto não foi informado na requisição");
        }
    }
}
