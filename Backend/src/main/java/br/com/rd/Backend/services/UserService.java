package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.interfaces.UserInterface;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.UserRepository;
import ch.qos.logback.core.encoder.EchoEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.List;

@Service
public class UserService implements UserInterface {

    @Autowired
    UserRepository userRepository;


    @Override
    public ResponseEntity saveUser(UserDTO userDTO) {
        ResponseEntity response = null;
        try {
            if (
                    userDTO.getFirstName() == null ||
                            userDTO.getLastName() == null ||
                            userDTO.getCpf() == null ||
                            userDTO.getBirth() == null ||
                            userDTO.getEmail() == null ||
                            userDTO.getPassword() == null

            ) {
                response = ResponseEntity.badRequest().body("Um dos campos obrigátorios não foi preenchido");
            }
            //Validação de email já cadastrado

            else if (userRepository.findByEmail(userDTO.getEmail()).size() != 0) {
                return ResponseEntity.badRequest().body("Este e-mail já está cadastrado");
            }

            //Validação de CPF já cadastrado
            else if (userRepository.findByCpf(userDTO.getCpf()).size() != 0) {
                return ResponseEntity.badRequest().body("Este CPF já está cadastrado");
            } else {
                User user = new User();
                user.setFirstName(userDTO.getFirstName());
                user.setLastName(userDTO.getLastName());
                user.setCpf(userDTO.getCpf());
                user.setBirth(userDTO.getBirth());
                user.setEmail(userDTO.getEmail());
                user.setPassword(userDTO.getPassword());
                user.setGender(userDTO.getGender());
                user.setPhone(userDTO.getPhone());

                userRepository.save(user);
                response = ResponseEntity.ok().body(" Usuário cadastrado");
            }
            return response;
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        } 
    }

    @Override
    public ResponseEntity deleteUserById(Long id) {
        try {
            userRepository.deleteById(id);
            return ResponseEntity.ok().body("Usuário deletado");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.badRequest().body("Id do usuário incorreto");
        } catch (NumberFormatException e){
            return ResponseEntity.badRequest().body("O Id deve ser numérico");
        } catch (MethodArgumentTypeMismatchException e) {
            return ResponseEntity.badRequest().body("O Id deve ser numérico");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Não foi possível realizar a consulta");
        }
    }


    @Override
    public ResponseEntity findUserById(Long id) {

        try {
            if (userRepository.findById(id).isEmpty()) {
                return ResponseEntity.badRequest().body("Id do usuário não encontrado");
            } else {
            userRepository.findById(id).get();
            return ResponseEntity.ok().body(userRepository.findById(id).get());
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Id do usuário não encontrado");
        }
    }

    @Override
    public ResponseEntity findUserByEmail(String email) {

        try {
            if (userRepository.findByEmail(email).isEmpty()) {
                return ResponseEntity.badRequest().body("Email não encontrado");
            } else {
            userRepository.findByEmail(email);
            return ResponseEntity.ok().body(userRepository.findByEmail(email));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("E-mail não encontrado");
        }
    }

    @Override
    public ResponseEntity findUserByCpf(String cpf) {
        try {
            if (userRepository.findByCpf(cpf).isEmpty()) {
                return ResponseEntity.badRequest().body("CPF não encontrado");
            } else {
                return ResponseEntity.ok().body(userRepository.findByCpf(cpf));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("CPF não encontrado");
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

            userRepository.save(userEntity);

            return ResponseEntity.ok().body("Atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e);
        }
    }
}
