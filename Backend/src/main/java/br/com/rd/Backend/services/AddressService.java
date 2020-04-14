package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.AddressInterface;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.repositories.AddressRepository;
import br.com.rd.Backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolationException;
import java.util.List;

@Service("AddressService")
public class AddressService implements AddressInterface {

    @Autowired
    AddressRepository addressRepository;

    @Override
    public ResponseEntity save(AddressDTO addressDTO) {

        try {
            Converter converter = new Converter();

            Address address = converter.converterTo(addressDTO);

            return ResponseEntity.ok().body(addressRepository.save(address));

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        } catch (ConstraintViolationException e) {
            return ResponseEntity.badRequest().body("Um dos campos obrigatórios não foi preenchido");
        }
    }

    @Override
    public ResponseEntity deleteById(Long id) {
        if (addressRepository.findById(id).isEmpty())
            return ResponseEntity.ok().body("Não há registros para o id informado");
        else {
            addressRepository.deleteById(id);
            return ResponseEntity.ok().body("Endereço id:" + id + " deletado");
        }
    }

    @Override
    public ResponseEntity findById(Long id) {
        if (addressRepository.findById(id).isEmpty())
            return ResponseEntity.ok().body("Endereço não encontrado");
        else
            return ResponseEntity.ok().body(addressRepository.findById(id));
    }

    @Override
    public ResponseEntity<List<Address>> findAll() {
        if (addressRepository.findAll().isEmpty())
            return null;
          else
            return ResponseEntity.ok().body(addressRepository.findAll());
    }

    @Override
    public ResponseEntity findByUser(User user) {
        if (addressRepository.findByIdUser(user).isEmpty())
            return ResponseEntity.badRequest().body("Não existem endereços para este usuário");
          else
            return ResponseEntity.ok().body(addressRepository.findByIdUser(user));
    }

    @Override
    public ResponseEntity update(AddressDTO addressDTO) {
        try {
            Address addressUpdate = addressRepository.getOne(addressDTO.getIdAddress());

            if (addressDTO.getCep() != null)
                addressUpdate.setCep(addressDTO.getCep());

            if (addressDTO.getState() != null)
                addressUpdate.setState(addressDTO.getState());

            if (addressDTO.getCity() != null)
                addressUpdate.setCity(addressDTO.getCity());

            if (addressDTO.getDistrict() != null)
                addressUpdate.setDistrict(addressDTO.getDistrict());

            if (addressDTO.getStreet() != null)
                addressUpdate.setStreet(addressDTO.getStreet());

            if (addressDTO.getNumber() != null)
                addressUpdate.setNumber(addressDTO.getNumber());

            if (addressDTO.getComplement() != null)
                addressUpdate.setComplement(addressDTO.getComplement());

            addressUpdate.setIdUser(addressDTO.getIdUser());

            Address addressResponse = addressRepository.save(addressUpdate);

            return ResponseEntity.ok().body(addressResponse);

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Erro: Exite um erro na requisição: " + e.getMessage());
        } catch (InvalidDataAccessApiUsageException e) {
            return ResponseEntity.badRequest().body("O Id do endereço não foi informado na requisição");
        }
    }
}
