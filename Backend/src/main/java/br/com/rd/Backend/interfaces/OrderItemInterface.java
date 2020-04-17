package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.models.Product;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.List;

public interface OrderItemInterface {

    ResponseEntity saveOrderItem(List<OrderItem> list);
    ResponseEntity<List<OrderItem>> findAllOrderItems();
    ResponseEntity<List<Product>> topSelling() throws SQLException;

}
