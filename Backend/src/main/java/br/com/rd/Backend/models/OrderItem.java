package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrderItem;

    @OneToOne
    @JoinColumn(name = "id_product", nullable = false)
    private Product idProduct;

    @Column(name = "vl_price")
    private Double price;

    @Column(name = "nr_quantity", nullable = false)
    private Integer quantity;
}
