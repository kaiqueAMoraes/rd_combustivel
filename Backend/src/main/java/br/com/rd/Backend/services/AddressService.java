package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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

            Address addressResponse = addressRepository.save(address);

            return ResponseEntity.ok().body(addressResponse);

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        }
    }

    @Override
    public ResponseEntity deleteAddressById(Long id) {
        if (addressRepository.findById(id).isEmpty()) {
            return ResponseEntity.ok().body("Não há registros para o id informado");
        } else {
            addressRepository.deleteById(id);
            return ResponseEntity.ok().body("Endereco deletado");
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
        if (addressRepository.findAll().isEmpty()) {
            return null;
        } else {
            return ResponseEntity.ok().body(addressRepository.findAll());
        }
    }

    @Override
    public ResponseEntity updateAddressById(AddressDTO addressDTO) {
        try {
            Address addressUpdate = addressRepository.getOne(addressDTO.getIdAddress());

            addressUpdate.setCep(addressDTO.getCep());
            addressUpdate.setState(addressDTO.getState());
            addressUpdate.setCity(addressDTO.getCity());
            addressUpdate.setDistrict(addressDTO.getDistrict());
            addressUpdate.setStreet(addressDTO.getStreet());
            addressUpdate.setNumber(addressDTO.getNumber());
            addressUpdate.setComplement(addressDTO.getComplement());

            Address addressResponse = addressRepository.save(addressUpdate);

            return ResponseEntity.ok().body(addressResponse);

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        }
    }
}
