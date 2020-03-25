package br.com.rd.Backend.interfaces;


import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserInterface {

    ResponseEntity saveUser(UserDTO userDTO);

    ResponseEntity deleteUserById(Long id);

    ResponseEntity findUserById(Long id);

    ResponseEntity findUserByEmail (String email);

    ResponseEntity findUserByCpf (String cpf);

    ResponseEntity<List<User>> findAllUsers ();

    ResponseEntity updateUserById (UserDTO userDTO);
}
