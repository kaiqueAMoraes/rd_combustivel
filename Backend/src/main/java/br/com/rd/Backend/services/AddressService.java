package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import org.hibernate.property.access.spi.PropertyAccessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("AddressService")
public class AddressService implements AddressInterface {

    @Autowired
    AddressRepository addressRepository;

    @Override
    public ResponseEntity saveAddress(AddressDTO addressDTO) {

        try {

            Converter converter = new Converter();

            Address address = converter.converterTo(addressDTO);

            return ResponseEntity.ok().body(addressRepository.save(address));

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        } catch (PropertyAccessException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body("Erro: O Usuário informado não existe: " + e.getMessage());
        } catch (JpaSystemException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body("Erro: O Usuário informado não existe: " + e.getMessage());
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
            addressUpdate.setUser(addressDTO.getUser());

            Address addressResponse = addressRepository.save(addressUpdate);

            return ResponseEntity.ok().body(addressResponse);

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        } catch (PropertyAccessException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body("Erro: O Usuário informado não existe: " + e.getMessage());
        } catch (JpaSystemException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body("Erro: O Usuário informado não existe: " + e.getMessage());
        }
    }
}
