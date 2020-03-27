package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import br.com.rd.Backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
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
        }
    }

    @Override
    public ResponseEntity deleteAddressById(Long id) {
        if (addressRepository.findById(id).isEmpty()) {
            return ResponseEntity.ok().body("Não há registros para o id informado");
        } else {
            addressRepository.deleteById(id);
            return ResponseEntity.ok().body("Endereço deletado");
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
    public ResponseEntity findAddressByUser(User user) {
        if (addressRepository.findByIdUser(user).isEmpty()) {
            return ResponseEntity.badRequest().body("Não existem endereços para este usuário");
        } else {
            return ResponseEntity.ok().body(addressRepository.findByIdUser(user));
        }
    }

    @Override
    public ResponseEntity updateAddressById(AddressDTO addressDTO) {
        try {
            Address addressUpdate = addressRepository.getOne(addressDTO.getIdAddress());

            if (addressDTO.getCep() != null) {
                addressUpdate.setCep(addressDTO.getCep());
            }
            if (addressDTO.getState() != null) {
                addressUpdate.setState(addressDTO.getState());
            }
            if (addressDTO.getCity() != null) {
                addressUpdate.setCity(addressDTO.getCity());
            }
            if (addressDTO.getDistrict() != null) {
                addressUpdate.setDistrict(addressDTO.getDistrict());
            }
            if (addressDTO.getStreet() != null) {
                addressUpdate.setStreet(addressDTO.getStreet());
            }
            if (addressDTO.getNumber() != null) {
                addressUpdate.setNumber(addressDTO.getNumber());
            }
            if (addressDTO.getComplement() != null) {
                addressUpdate.setComplement(addressDTO.getComplement());
            }

            addressUpdate.setIdUser(addressDTO.getIdUser());

            Address addressResponse = addressRepository.save(addressUpdate);

            return ResponseEntity.ok().body(addressResponse);

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        }
    }
}
