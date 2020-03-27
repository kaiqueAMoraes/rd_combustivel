package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.*;
import br.com.rd.Backend.DTOs.ProductDTO;

import br.com.rd.Backend.models.*;

import java.util.ArrayList;
import java.util.Date;
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

    public AddressDTO converterTo(Address address) {

        AddressDTO addressDTO = new AddressDTO();

        addressDTO.setCep(address.getCep());
        addressDTO.setState(address.getState());
        addressDTO.setCity(address.getCity());
        addressDTO.setDistrict(address.getDistrict());
        addressDTO.setStreet(address.getStreet());
        addressDTO.setNumber(address.getNumber());
        addressDTO.setComplement(address.getComplement());
        addressDTO.setIdUser(address.getIdUser());

        return addressDTO;
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

    public UserDTO converterTo(User user) {

        UserDTO userDTO = new UserDTO();

        userDTO.setIdUser(user.getIdUser());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setBirth(user.getBirth());
        userDTO.setCpf(user.getCpf());
        userDTO.setEmail(user.getEmail());
        userDTO.setGender(user.getGender());
        userDTO.setPhone(user.getPhone());

        return userDTO;
    }

    public Order converterTo(OrderDTO orderDTO) {

        Order order = new Order();

        order.setIdUser(orderDTO.getIdUser());
        order.setIdAddress(orderDTO.getIdAddress());
        order.setTotalPrice(orderDTO.getTotalPrice());
        order.setDate(new Date());

        return order;
    }

    public OrderDTO converterTo(Order order) {

        OrderDTO orderDTO = new OrderDTO();

        orderDTO.setIdUser(order.getIdUser());
        orderDTO.setIdAddress(order.getIdAddress());
        orderDTO.setTotalPrice(order.getTotalPrice());
        orderDTO.setDate(new Date());

        return orderDTO;
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

    public List<OrderItemDTO> convert(List<OrderItem> orderItem) {

        List<OrderItemDTO> listItems = new ArrayList<>();
        for (OrderItem orderItems : orderItem) {
            OrderItemDTO it = new OrderItemDTO();
            it.setIdOrderItem(orderItems.getIdOrderItem());
            it.setQuantity(orderItems.getQuantity());
            it.setPrice(orderItems.getPrice());
            it.setIdProduct(orderItems.getIdProduct());
            listItems.add(it);
        }

        return listItems;
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

    public ProductDTO converterTo(Product product) {

        ProductDTO productDTO = new ProductDTO();

        productDTO.setName(product.getName());
        productDTO.setPrice(product.getPrice());
        productDTO.setImage(product.getImage());
        productDTO.setDescription(product.getDescription());
        productDTO.setQuantStock(product.getQuantStock());
        productDTO.setIdCategory(product.getIdCategory());

        return productDTO;
    }

    public Category converterTo(CategoryDTO categoryDTO) {

        Category category = new Category();

        category.setName(categoryDTO.getName());

        return category;
    }

    public CategoryDTO converterTo(Category category) {

        CategoryDTO categoryDTO = new CategoryDTO();

        categoryDTO.setName(category.getName());

        return categoryDTO;
    }
}
