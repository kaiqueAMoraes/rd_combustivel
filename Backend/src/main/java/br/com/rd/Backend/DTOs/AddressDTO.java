package br.com.rd.Backend.DTOs;

import br.com.rd.Backend.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

    private Long idAddress;
    private String cep;
    private String state;
    private String city;
    private String district;
    private String street;
    private String number;
    private String complement;
    private User idUser;
}
