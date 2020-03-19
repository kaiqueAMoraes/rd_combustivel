package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.models.Product;
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

    public Product converterTo(ProductDTO productDTO) {

        Product product = new Product();

        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        product.setImage(productDTO.getImage());
        product.setDescription(productDTO.getDescription());
        product.setQuantStock(productDTO.getQuantStock());
        product.setIdCategory(productDTO.getIdCategory());

        return product;
    }

}
