package br.com.rd.Backend.interfaces;


import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

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
