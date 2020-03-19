package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.User;

public class Converter {

    public Converter() {}

    public Address converterTo(AddressDTO addressDTO) {

            Address address = new Address();

            address.setCep(addressDTO.getCep());
            address.setState(addressDTO.getState());
            address.setCity(addressDTO.getCity());
            address.setDistrict(addressDTO.getDistrict());
            address.setStreet(addressDTO.getStreet());
            address.setNumber(addressDTO.getNumber());
            address.setComplement(addressDTO.getComplement());
            address.setUser(addressDTO.getUser());

            return address;
    }

    public User converterTo(UserDTO userDTO){
        return null;
    }
}
