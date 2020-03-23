package br.com.rd.Backend.controllers;


import br.com.rd.Backend.services.MailService;
import br.com.rd.Backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
public class MailController {

    @Autowired
    UserService userService;

    @Autowired
    MailService mailService;

    @GetMapping("/recuperar-senha/{email}")
    public ResponseEntity recuperarSenha(@PathVariable("email") String email){
        return userService.findUserByEmail(email);
    }

}
