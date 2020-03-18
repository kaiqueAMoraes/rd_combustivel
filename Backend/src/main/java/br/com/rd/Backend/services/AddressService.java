package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.List;

@Service("AddressService")
public class AddressService implements AddressInterface {

    @Autowired
    AddressRepository addressRepository;

    @Override
    public ResponseEntity saveAddress(AddressDTO addressDTO) {
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

            return ResponseEntity.ok().body("Ok");

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição");
        }
    }

    @Override
    public ResponseEntity deleteAddressById(Long id) {
        try {
            if (addressRepository.findById(id).isEmpty()) {
                return ResponseEntity.ok().body("Endereco não encontrado");
            } else {
                addressRepository.deleteById(id);
                return ResponseEntity.ok().body("Endereco deletado");
            }
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Houve um erro na consulta" + e.getMessage());
        } catch (MethodArgumentTypeMismatchException e) {
            return ResponseEntity.badRequest().body("Houve um erro na consulta" + e.getMessage());
        }
    }

    @Override
    public ResponseEntity findAddressById(Long id) {
        if (addressRepository.findById(id).isEmpty()) {
            return ResponseEntity.ok().body("Endereco não encontrado");
        } else {
            return ResponseEntity.ok().body(addressRepository.findById(id));
        }
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
