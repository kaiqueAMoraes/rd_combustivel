package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@Service("AddressService")
public class AddressService implements AddressInterface {

    @Autowired
    AddressRepository addressRepository;

    @Override
    public ResponseEntity saveAddress(AddressDTO addressDTO) {
        ResponseEntity response = null;
        try {
            Address address = new Address();
            address.setCep(addressDTO.getCep());
            address.setState(addressDTO.getState());
            address.setCity(addressDTO.getCity());
            address.setDistrict(addressDTO.getDistrict());
            address.setStreet(addressDTO.getStreet());
            address.setNumber(addressDTO.getNumber());
            address.setComplement(addressDTO.getComplement());

            addressRepository.save(address);

            response = ResponseEntity.ok().body("Ok");

        } catch (Exception e) {
            response = ResponseEntity.ok().body("Erro: Existem campos que não podem ser nulos");
        }
        return response;
    }

    @Override
    public ResponseEntity deleteAddressById(Long id) {
        ResponseEntity response = null;
        if(findAddressById(id) == null){
            response = ResponseEntity.ok().body("Endereco não encontrado");
        } else {
            addressRepository.deleteById(id);
            response = ResponseEntity.ok().body("Endereço deletado");
        }

        return response;
    }

    @Override
    public ResponseEntity findAddressById(Long id) {
        return ResponseEntity.ok().body(addressRepository.findById(id));
    }

    @Override
    public ResponseEntity<List<Address>> findAllAddresses() {
        return null;
    }

    @Override
    public ResponseEntity updateAddressById(AddressDTO addressDTO) {
        //TODO
        return null;
    }
}
