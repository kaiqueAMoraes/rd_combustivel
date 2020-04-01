package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.services.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderItemController {

    @Autowired
    OrderItemService orderItemService;

    @GetMapping("/findall-orderitems")
    public ResponseEntity findAllOrderItems() {
        return orderItemService.findAllOrderItems();
    }
}
