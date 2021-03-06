package br.com.rd.Backend.repositories;

import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByName (String name);
    List<Product> findByDescription (String description);
    List<Product> findByIdCategory (Category idCategory);
}
