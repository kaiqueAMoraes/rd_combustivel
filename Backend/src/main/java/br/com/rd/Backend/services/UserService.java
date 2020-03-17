package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.interfaces.UserInterface;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserInterface {

    @Autowired
    UserRepository userRepository;


    @Override
    public ResponseEntity saveUser(UserDTO userDTO) {
        ResponseEntity response = null;
        if (userDTO.getFirstName() == null || userDTO.getLastName() == null) {
            response = ResponseEntity.badRequest().body("Um dos campos obrigátorios não foi preenchido");
        }
        else {
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

            response = ResponseEntity.ok().body( " recebido ");
        }

            return response;
    }

    @Override
    public ResponseEntity deleteUserById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity findUserById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<User>> findAllUsers() {
        return null;
    }

    @Override
    public ResponseEntity updateUserById(UserDTO userDTO) {
        return null;
    }
}
