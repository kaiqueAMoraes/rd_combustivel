package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.services.AddressService;
import br.com.rd.Backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping("/create-address")
    public ResponseEntity saveAddress(@RequestBody AddressDTO addressDTO) {
        return addressService.saveAddress(addressDTO);
    }

    @GetMapping("/find-address/{id}")
    public ResponseEntity findAddressById(@PathVariable("id") Long id) {
        return addressService.findAddressById(id);
    }

    @GetMapping("/findall-address")
    public ResponseEntity findAllAddresses() {
        return addressService.findAllAddresses();
    }

    @GetMapping("/find-address-byuser/{idUser}")
    public ResponseEntity findById(@PathVariable("idUser") User user){
        return addressService.findAddressByUser(user);
    }


    @PutMapping("/update-address")
    public ResponseEntity updateAddress(@RequestBody AddressDTO addressDTO) {
        return addressService.updateAddressById(addressDTO);
    }

    @DeleteMapping("/delete-address/{id}")
    public ResponseEntity deleteAddress(@PathVariable("id") Long id) {
       return addressService.deleteAddressById(id);
    }
}
