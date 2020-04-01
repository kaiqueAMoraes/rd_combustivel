package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface OrderItemInterface {

    ResponseEntity saveOrderItem(List<OrderItem> list);
    ResponseEntity<List<OrderItem>> findAllOrderItems();
}
