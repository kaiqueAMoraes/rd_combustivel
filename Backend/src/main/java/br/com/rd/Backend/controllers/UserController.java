package br.com.rd.Backend.controllers;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/create-user")
    public ResponseEntity saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }


}
