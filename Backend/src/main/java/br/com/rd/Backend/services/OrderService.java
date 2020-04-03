package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.OrderInterface;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.OrderRepository;
import br.com.rd.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service("OrderService")
public class OrderService implements OrderInterface {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderItemService orderItemService;

    @Override
    public ResponseEntity saveOrder(OrderDTO orderDTO) {

        try {

            Converter converter = new Converter();

            Order order = converter.converterTo(orderDTO);

            ResponseEntity response = orderItemService.saveOrderItem(order.getItemList());
            if(response.getStatusCode() == BAD_REQUEST){
                return ResponseEntity.badRequest().body(response.getBody());
            }

            order.setTotalPrice((Double) response.getBody());

            orderRepository.save(order);

            return ResponseEntity.ok().body(response.getBody());

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
        if (orderRepository.findById(id).isEmpty()) {
            return ResponseEntity.badRequest().body("Pedido não encontrado");
        } else {
            orderRepository.findById(id).get();
            return ResponseEntity.ok().body(orderRepository.findById(id).get());
        }
    }

    @Override
    public ResponseEntity findOrderByUser(User user) {
        if (orderRepository.findByIdUser(user).isEmpty()) {
            return ResponseEntity.badRequest().body("Não existem pedidos para este usuário");
        } else {
            return ResponseEntity.ok().body(orderRepository.findByIdUser(user));
        }
    }

    @Override
    public ResponseEntity findOrderByDate(Date date) { //TODO
        if (orderRepository.findByDate(date).isEmpty()) {
            return ResponseEntity.badRequest().body("Não existem pedidos para a data informada");
        } else {
            return ResponseEntity.ok().body(orderRepository.findByDate(date));
        }
    }

    @Override
    public ResponseEntity<List<Order>> findAllOrders() {
        return ResponseEntity.ok().body(orderRepository.findAll());
    }

    @Override
    public ResponseEntity updateOrderById(OrderDTO orderDTO) { //TODO
        return null;
    }
}
