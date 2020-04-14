package br.com.rd.Backend.interfaces;


import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.User;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface UserInterface {

    ResponseEntity save(UserDTO userDTO);

    ResponseEntity deleteById(Long id);

    ResponseEntity findById(Long id);

    ResponseEntity findByEmail (String email);

    ResponseEntity findByEmailAndPassword(String email, String password);

    ResponseEntity findByCpf (String cpf);

    ResponseEntity<?> findAll(Pageable pageable);

    ResponseEntity update(UserDTO userDTO);

}
