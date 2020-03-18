package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("AddressService")
public class AddressService implements AddressInterface {

    @Autowired
    AddressRepository addressRepository;

    @Override
    public ResponseEntity saveAddress(AddressDTO addressDTO) {
        ResponseEntity response = null;
        if(addressDTO.getCep() == null){
            response = ResponseEntity.badRequest().body("error");
        } else {
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
        }

        return response;
    }

    @Override
    public ResponseEntity deleteAddressById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findAddressById(Long id) {
        return null;
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
