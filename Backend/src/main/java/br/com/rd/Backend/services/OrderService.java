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

            Order orderEntity = new Order();

            orderEntity.setIdUser(orderDTO.getIdUser());
            orderEntity.setIdAddress(orderDTO.getIdAddress());
            orderEntity.setTotalPrice(orderDTO.getTotalPrice());
            orderEntity.setDate(orderDTO.getDate());

            List<OrderItem> listItens = new ArrayList<>();
            for (OrderItemDTO orderItens : orderDTO.getList()) {
                OrderItem it = new OrderItem();
                it.setIdOrderItem(orderItens.getIdOrderItem());
                it.setQuantity(orderItens.getQuantity());
                it.setPrice(orderItens.getPrice());
                it.setIdProduct(orderItens.getIdProduct());
                listItens.add(it);
            }

            orderEntity.setList(listItens);
            orderRepository.save(orderEntity);

            return ResponseEntity.ok().body(orderEntity);

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
