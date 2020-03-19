package br.com.rd.Backend.converter;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.DTOs.ProductDTO;

import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
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
            address.setIdUser(addressDTO.getIdUser());

            return address;
    }

    public User converterTo(UserDTO userDTO){
        return null;
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

        return product;
    }
}