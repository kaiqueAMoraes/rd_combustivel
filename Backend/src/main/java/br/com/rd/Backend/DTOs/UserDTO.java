package br.com.rd.Backend.DTOs;

import br.com.rd.Backend.models.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long idUser;
    private String firstName;
    private String lastName;
    private String cpf;
    private String email;
    private String password;
    private Date birth;
    private String gender;
    private String phone;
}
