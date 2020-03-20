package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.OrderInterface;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service("OrderService")
public class OrderService implements OrderInterface {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public ResponseEntity saveOrder(OrderDTO orderDTO) {
        try {

            Converter converter = new Converter();

            Order order = converter.converterTo(orderDTO);

            List<OrderItem> list = new ArrayList<>();
            for (OrderItemDTO items : orderDTO.getList()) {
                OrderItem orderItem = new OrderItem();
                orderItem.setIdProduct(items.getIdProduct());
                orderItem.setPrice(items.getPrice());
                orderItem.setQuantity(items.getQuantity());
                orderItem.setIdOrderItem(items.getIdOrderItem());
                list.add(orderItem);
            }

            order.setList(list);

            return ResponseEntity.ok().body(orderRepository.save(order));

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: um ou mais campos não foram preenchidos " + e.getMessage());
        }
    }

    @Override
    public ResponseEntity deleteOrderById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findOrderById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findOrderByUser(User user) {
        return null;
    }

    @Override
    public ResponseEntity findOrderByDate(Date date) {
        return null;
    }

    @Override
    public ResponseEntity<List<Order>> findAllOrders() {
        return null;
    }

    @Override
    public ResponseEntity updateOrderById(OrderDTO orderDTO) {
        return null;
    }
}
