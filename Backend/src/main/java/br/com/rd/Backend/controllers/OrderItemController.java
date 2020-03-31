package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.services.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderItemController {

//    @Autowired
//    OrderItemService orderItemService;
//
//    @PostMapping("/create-orderitem")
//    public ResponseEntity createOrderItem(@RequestBody OrderItemDTO orderItemDTO) {
//        return orderItemService.saveOrderItem(orderItemDTO);
//    }
//
//    @GetMapping("/findall-orderitems")
//    public ResponseEntity findAllOrderItems() {
//        return orderItemService.findAllOrderItems();
//    }
//
//    @GetMapping("/findorderitemsbyidOrder/{id}")
//    public ResponseEntity findByIdOrder(@PathVariable("id") Order order) {
//        return orderItemService.findOrderItemByIdOrder(order);
//    }
}
