package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AddressInterface {

    ResponseEntity save(AddressDTO addressDTO);

    ResponseEntity deleteById(Long id);

    ResponseEntity findById(Long id);

    ResponseEntity<List<Address>> findAll();

    ResponseEntity findByUser(User user);

    ResponseEntity update(AddressDTO addressDTO);

}
