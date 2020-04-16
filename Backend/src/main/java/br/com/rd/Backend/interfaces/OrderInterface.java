package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.models.User;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.Date;
import java.util.List;

public interface OrderInterface {

    ResponseEntity saveOrder(OrderDTO orderDTO);

    ResponseEntity deleteOrderById(Long id);

    ResponseEntity findOrderById(Long id);

    ResponseEntity findOrderByUser(User user);

    ResponseEntity findOrderByDate(Date date);

    ResponseEntity<?> findAllOrders(Pageable pageable);

    ResponseEntity updateOrderById(OrderDTO orderDTO);
}
