package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.*;
import br.com.rd.Backend.DTOs.ProductDTO;

import br.com.rd.Backend.models.*;


public class Converter {

    public Converter() {
    }

    public Address converterTo(AddressDTO addressDTO) {

        Address address = new Address();

        address.setCep(addressDTO.getCep());
        address.setState(addressDTO.getState());
        address.setCity(addressDTO.getCity());
        address.setDistrict(addressDTO.getDistrict());
        address.setStreet(addressDTO.getStreet());
        address.setNumber(addressDTO.getNumber());
        address.setComplement(addressDTO.getComplement());
        address.setIdUser(addressDTO.getIdUser());

        return address;
    }

    public User converterTo(UserDTO userDTO) {

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

        order.setTotalPrice(orderDTO.getTotalPrice());
        order.setDate(orderDTO.getDate());
        order.setIdUser(orderDTO.getIdUser());
        order.setIdAddress(orderDTO.getIdAddress());

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

    public OrderItem converterTo(OrderItemDTO orderItemDTO) {

        OrderItem orderItem = new OrderItem();

        orderItem.setIdProduct(orderItemDTO.getIdProduct());
        orderItem.setPrice(orderItemDTO.getPrice());
        orderItem.setQuantity(orderItemDTO.getQuantity());

        return orderItem;

    }

    public Category converterTo(CategoryDTO categoryDTO) {

        Category category = new Category();

        category.setName(categoryDTO.getName());

        return category;
    }
}
