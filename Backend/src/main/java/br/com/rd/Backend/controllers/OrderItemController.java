package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.services.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderItemController {

    @Autowired
    OrderItemService orderItemService;

    @PostMapping("/create-orderitem")
    public ResponseEntity createOrder(@RequestBody OrderItemDTO orderItemDTO) {
        return orderItemService.saveOrderItem(orderItemDTO);
    }
}
