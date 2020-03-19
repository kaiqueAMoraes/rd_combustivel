package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.DTOs.CategoryDTO;
import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.DTOs.ProductDTO;

import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.models.Category;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.models.User;

import java.util.ArrayList;
import java.util.List;

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

        User user = new User();

        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setCpf(userDTO.getCpf());
        user.setBirth(userDTO.getBirth());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setGender(userDTO.getGender());
        user.setPhone(userDTO.getPhone());

        return user;
    }

    public Order converterTo(OrderDTO orderDTO) {

        Order order = new Order();

        order.setDate(orderDTO.getDate());
        order.setTotalPrice(order.getTotalPrice());
        order.setIdUser(orderDTO.getIdUser());
        order.setIdAddress(orderDTO.getIdAddress());

        List<OrderItem> list = new ArrayList<>();
        for (OrderItem itens: orderDTO.getList()) {
            OrderItem orderItem = new OrderItem();


            list.add(orderItem);
        }

        return order;
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
