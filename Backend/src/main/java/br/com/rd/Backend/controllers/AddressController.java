package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.services.AddressService;
import br.com.rd.Backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping(value = "/create", produces = "application/json", consumes = "application/json")
    public ResponseEntity save(@RequestBody AddressDTO addressDTO) {
        return addressService.save(addressDTO);
    }

    @GetMapping(value = "/findbyid/{id}", produces = "application/json")
    public ResponseEntity findById(@PathVariable("id") Long id) {
        return addressService.findById(id);
    }

    @GetMapping(value = "/findall", produces = "application/json")
    public ResponseEntity findAll() {
        return addressService.findAll();
    }

    @GetMapping(value = "/findbyiduser/{idUser}", produces = "application/json")
    public ResponseEntity findByUser(@PathVariable("idUser") User user){
        return addressService.findByUser(user);
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    public ResponseEntity update(@RequestBody AddressDTO addressDTO) {
        return addressService.update(addressDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        return addressService.deleteById(id);
    }
}
