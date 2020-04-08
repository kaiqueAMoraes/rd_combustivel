package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class DecodePassword {

    @Autowired
    UserRepository userRepository;




    public static void main(String[] args) {

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        String password = "123";

        String encodedPassword = passwordEncoder.encode(password);

        System.out.println("Password is         : " + password);

        System.out.println("Encoded Password is : " + encodedPassword);


        boolean isPasswordMatch = passwordEncoder.matches("abc", encodedPassword);

        if (isPasswordMatch == true) {
            System.out.println("Senhas iguais");
        } else {
            System.out.println("Senhas diferentes");
        }



    }

}
