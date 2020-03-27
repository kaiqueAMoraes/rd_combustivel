package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.OrderItemInterface;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.repositories.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("OrderItemService")
public class OrderItemService implements OrderItemInterface {

    @Autowired
    OrderItemRepository orderItemRepository;

    @Override
    public ResponseEntity saveOrderItem(OrderItemDTO orderItemDTO) {

        Converter converter = new Converter();
        OrderItem orderItem = converter.convertTo(orderItemDTO);
        return ResponseEntity.ok().body(orderItemRepository.save(orderItem));
    }

    @Override
    public ResponseEntity findOrderItemByIdOrder(Order order) {
        return ResponseEntity.ok().body(orderItemRepository.findByIdOrder(order));
    }

    @Override
    public ResponseEntity<List<OrderItem>> findAllOrderItems() {
        return ResponseEntity.ok().body(orderItemRepository.findAll());
    }
}
