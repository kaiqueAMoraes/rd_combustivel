package br.com.rd.Backend.DTOs;

import br.com.rd.Backend.models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDTO {

    private Long idOrderItem;
    private Product idProduct;
    private Double price;
    private Integer quantity;
}

