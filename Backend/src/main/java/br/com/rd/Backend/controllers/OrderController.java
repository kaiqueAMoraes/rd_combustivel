package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/create-order")
    public ResponseEntity saveOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.saveOrder(orderDTO);
    }

    @DeleteMapping("/delete-order/{id}")
    public ResponseEntity deleteOrderById (@PathVariable ("id") Long id) {
        return orderService.deleteOrderById(id);
    }

    @GetMapping("/findall-orders")
    public ResponseEntity<?> findAllOrders() {
        return orderService.findAllOrders();
    }

    @GetMapping("/find-orders/{id}")
    public ResponseEntity findById(@PathVariable("id") Long id){
        return orderService.findOrderById(id);
    }

    @GetMapping("/find-orders-byuser/{idUser}")
    public ResponseEntity findById(@PathVariable("idUser") User user){
        return orderService.findOrderByUser(user);
    }

    //SEM FUNCIONAMENTO:
    @GetMapping("/find-orders-bydate")
    public ResponseEntity findById(@RequestBody Date date){
        return null;
    }

}
