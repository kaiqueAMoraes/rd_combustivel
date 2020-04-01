package br.com.rd.Backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long idProduct;

    @NotBlank(message = "Nome do produto não foi informado")
    @Column(name = "ds_name", nullable = false)
    private String name;

    @Lob
    @Column(name = "ds_description", nullable = true)
    private String description;

    @Column(name = "ds_image", nullable = true)
    private String image;

    @Column(name = "vl_price", nullable = false)
    private Double price;

    @Column(name = "nr_quantStock", nullable = false)
    private Long quantStock;

    @ManyToOne
    @JoinColumn(name = "id_category", referencedColumnName = "id_category")
    private Category idCategory;

}