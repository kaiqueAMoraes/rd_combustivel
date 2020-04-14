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
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity save(@RequestBody OrderDTO orderDTO) {
        return orderService.save(orderDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable ("id") Long id) {
        return orderService.deleteById(id);
    }

    @GetMapping(value = "/findall", produces = "application/json")
    public ResponseEntity<?> findAll(Pageable pageable) {
        return orderService.findAll(pageable);
    }

    @GetMapping(value = "/findbyid/{id}", produces = "application/json")
    public ResponseEntity findById(@PathVariable("id") Long id){
        return orderService.findById(id);
    }

    @GetMapping(value = "/findbyiduser/{idUser}", produces = "application/json")
    public ResponseEntity findById(@PathVariable("idUser") User user){
        return orderService.findByUser(user);
    }

//    //SEM FUNCIONAMENTO:
//    @GetMapping("/findbydate")
//    public ResponseEntity findById(@RequestBody Date date){
//        return null;
//    }

}
