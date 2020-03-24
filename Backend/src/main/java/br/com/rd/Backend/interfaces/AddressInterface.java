package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AddressInterface {

    ResponseEntity saveAddress(AddressDTO addressDTO);

    ResponseEntity deleteAddressById(Long id);

    ResponseEntity findAddressById(Long id);

    ResponseEntity<List<Address>> findAllAddresses();

    ResponseEntity findAddressByUser(User user);

    ResponseEntity updateAddressById(AddressDTO addressDTO);

}
