package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/create-order")
    public ResponseEntity saveOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.saveOrder(orderDTO);
    }

    @GetMapping("/findall-orders")
    public ResponseEntity findAllOrders() {
        return orderService.findAllOrders();
    }
}
