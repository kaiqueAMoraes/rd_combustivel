package br.com.rd.Backend.DTOs;

import br.com.rd.Backend.models.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Long idProduct;
    private String name;
    private String description;
    private String image;
    private Double price;
    private Long quantStock;
    private Category idCategory;

}
