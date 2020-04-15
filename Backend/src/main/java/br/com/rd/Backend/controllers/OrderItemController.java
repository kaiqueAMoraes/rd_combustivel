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
@RequestMapping("/orderitem")
public class OrderItemController {

    @Autowired
    OrderItemService orderItemService;

    @GetMapping(value = "/findall", produces = "application/json")
    public ResponseEntity findAll() {
        return orderItemService.findAll();
    }

    @GetMapping(value = "/top-selling", produces = "application/json")
    public ResponseEntity<List<Product>> topSelling() {
        return orderItemService.topSelling();
    }
}
