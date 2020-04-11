package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.Login;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/create-user")
    public ResponseEntity saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity deleteUserById (@PathVariable ("id") Long id) {
        return userService.deleteUserById(id);
    }

    @PostMapping("/login")
    public String findUserByEmailAndPassword(@RequestBody Login login) {
        return "Works!";
    }

    @GetMapping("/find-user/{id}")
    public ResponseEntity findUserById(@PathVariable("id") Long id) {
        return userService.findUserById(id);
    }

    @GetMapping("/find-user-email/{email}")
    public ResponseEntity findByEmail(@PathVariable ("email") String email) {
        return userService.findUserByEmail(email);
    }

    @GetMapping("find-user-cpf/{cpf}")
    public ResponseEntity findByCpf(@PathVariable("cpf")String cpf) {
        return userService.findUserByCpf(cpf);
    }

    @GetMapping("find-users")
    public ResponseEntity<List<User>> findAllUsers() {
        return userService.findAllUsers();
    }

    @PutMapping("update-user")
    public ResponseEntity updateUserById(@RequestBody UserDTO user) {
        return userService.updateUserById(user);
    }

}
