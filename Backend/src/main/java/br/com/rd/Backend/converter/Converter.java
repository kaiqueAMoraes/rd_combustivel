package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.*;
import br.com.rd.Backend.DTOs.ProductDTO;

import br.com.rd.Backend.models.*;

import java.util.ArrayList;
import java.util.List;


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

        order.setIdUser(orderDTO.getIdUser());
        order.setIdAddress(orderDTO.getIdAddress());
        order.setTotalPrice(orderDTO.getTotalPrice());
        order.setDate(orderDTO.getDate());

        List<OrderItem> listItems = converterTo(orderDTO.getList());

        order.setList(listItems);

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

    public List<OrderItem> converterTo(List<OrderItemDTO> orderItemDTO) {

        List<OrderItem> listItems = new ArrayList<>();
        for (OrderItemDTO orderItems : orderItemDTO) {
            OrderItem it = new OrderItem();
            it.setIdOrderItem(orderItems.getIdOrderItem());
            it.setQuantity(orderItems.getQuantity());
            it.setPrice(orderItems.getPrice());
            it.setIdProduct(orderItems.getIdProduct());
            listItems.add(it);
        }

        return listItems;
    }

    public Category converterTo(CategoryDTO categoryDTO) {

        Category category = new Category();

        category.setName(categoryDTO.getName());

        return category;
    }
}
