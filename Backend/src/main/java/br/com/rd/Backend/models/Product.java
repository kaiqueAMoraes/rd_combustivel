package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

    @Column(name = "ds_name")
    private String name;

    @Column(name = "ds_description")
    private String description;

    @Column(name = "ds_image")
    private String image;

    @Column(name = "vl_price")
    private Double price;

    @Column(name = "nr_quantStock")
    private Long quantStock;

}