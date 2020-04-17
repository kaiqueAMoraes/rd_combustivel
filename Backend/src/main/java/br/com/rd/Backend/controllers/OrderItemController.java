package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.services.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderItemController {

    @Autowired
    OrderItemService orderItemService;

    @GetMapping("/findall-orderitems")
    public ResponseEntity findAllOrderItems() {
        return orderItemService.findAllOrderItems();
    }

    @GetMapping("/top-selling")
    public ResponseEntity<List<Product>> topSelling() {
        return orderItemService.topSelling();
    }
}
