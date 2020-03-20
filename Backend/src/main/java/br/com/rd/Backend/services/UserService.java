package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.UserInterface;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityNotFoundException;
import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class UserService implements UserInterface {

    @Autowired
    UserRepository userRepository;


    @Override
    public ResponseEntity saveUser(UserDTO userDTO) {
        ResponseEntity response = null;

        try {
            //Validação de email já cadastrado

            if (userRepository.findByEmail(userDTO.getEmail()).size() != 0) {
                return ResponseEntity.badRequest().body("Este e-mail já foi cadastrado");
            }

            //Validação de CPF já cadastrado
            else if (userRepository.findByCpf(userDTO.getCpf()).size() != 0) {
                return ResponseEntity.badRequest().body("Este CPF já foi cadastrado");
            } else {
                Converter converter = new Converter();

                User user = converter.converterTo(userDTO);

                response = ResponseEntity.ok().body(userRepository.save(user));
            }
        } catch (DataIntegrityViolationException e) {
            response = ResponseEntity.badRequest().body("Um ou mais campos obrigatórios não foram preenchidos ");
        }
        return response;
    }

    @Override
    public ResponseEntity deleteUserById(Long id) {
        try {
            userRepository.deleteById(id);
            return ResponseEntity.ok().body("Usuário deletado");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Id do usuário não existe");
        }
    }


    @Override
    public ResponseEntity findUserById(Long id) {

        if (userRepository.findById(id).isEmpty()) {
            return ResponseEntity.badRequest().body("Id do usuário não encontrado");
        } else {
            userRepository.findById(id).get();
            return ResponseEntity.ok().body(userRepository.findById(id).get());
        }
    }

    @Override
    public ResponseEntity findUserByEmail(String email) {

        if (userRepository.findByEmail(email).isEmpty()) {
            return ResponseEntity.badRequest().body("Email não encontrado");
        } else {
            userRepository.findByEmail(email);
            return ResponseEntity.ok().body(userRepository.findByEmail(email));
        }
    }

    @Override
    public ResponseEntity findUserByCpf(String cpf) {

        if (userRepository.findByCpf(cpf).isEmpty()) {
            return ResponseEntity.badRequest().body("CPF não encontrado");
        } else {
            return ResponseEntity.ok().body(userRepository.findByCpf(cpf));
        }

    }

    @Override
    public ResponseEntity<List<User>> findAllUsers() {
        return ResponseEntity.ok().body(userRepository.findAll());
    }

    @Override
    public ResponseEntity updateUserById(@RequestBody UserDTO userDTO) {

        try {

            User userEntity = userRepository.getOne(userDTO.getIdUser());

            userEntity.setFirstName(userDTO.getFirstName());
            userEntity.setLastName(userDTO.getLastName());
            userEntity.setCpf(userDTO.getCpf());
            userEntity.setPhone(userDTO.getPhone());
            userEntity.setBirth(userDTO.getBirth());
            userEntity.setEmail(userDTO.getEmail());
            userEntity.setPassword(userDTO.getPassword());

            return ResponseEntity.ok().body(userRepository.save(userEntity));

        } catch (InvalidDataAccessApiUsageException e) {
            return ResponseEntity.badRequest().body("O Id do usuário não foi informado na requisição");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.badRequest().body("Erro: " + e.getMessage());
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Id do usuário não existe");
        }
    }
}
