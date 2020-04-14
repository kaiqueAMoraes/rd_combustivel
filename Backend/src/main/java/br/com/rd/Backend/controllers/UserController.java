package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.Login;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity save(@RequestBody UserDTO userDTO){
        return userService.save(userDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable ("id") Long id) {
        return userService.deleteById(id);
    }

    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity findByEmailAndPassword(@RequestBody Login login) {
        return userService.findByEmailAndPassword(login.getEmail(), login.getPassword());
    }

    @GetMapping(value = "/findbyid/{id}", produces = "application/json")
    public ResponseEntity findById(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @GetMapping(value = "/findbyemail/{email}", produces = "application/json")
    public ResponseEntity findByEmail(@PathVariable ("email") String email) {
        return userService.findByEmail(email);
    }

    @GetMapping(value = "/findbycpf/{cpf}", produces = "application/json")
    public ResponseEntity findByCpf(@PathVariable("cpf")String cpf) {
        return userService.findByCpf(cpf);
    }

    @GetMapping(value = "/findall", produces = "application/json")
    public ResponseEntity<?> findAll(Pageable pageable) {
        return userService.findAll(pageable);
    }

    @PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
    public ResponseEntity update(@RequestBody UserDTO user) {
        return userService.update(user);
    }
}
