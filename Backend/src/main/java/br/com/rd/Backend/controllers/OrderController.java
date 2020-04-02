package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.OrderRepository;
import br.com.rd.Backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/create-order")
    public ResponseEntity saveOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.saveOrder(orderDTO);
    }

    @GetMapping("/findall-orders")
    public ResponseEntity findAllOrders() {
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

    @GetMapping("/find-orders-bydate/{date}")
    public ResponseEntity findById(@PathVariable("date") Date date){
        return orderService.findOrderByDate(date);
    }

    @GetMapping("/search-order")
    public ResponseEntity searchOrder(@RequestParam ("idOrder")Long idOrder, @RequestParam("dateInput")String dateInput) {
        return ResponseEntity.ok().body(orderRepository.findByIdOrderOrDate(idOrder, dateInput));
    }
}
