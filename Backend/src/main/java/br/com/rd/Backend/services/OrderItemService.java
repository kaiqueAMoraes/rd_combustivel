package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.OrderItemDTO;
import br.com.rd.Backend.DTOs.ProductDTO;
import br.com.rd.Backend.converter.Converter;
import br.com.rd.Backend.interfaces.OrderItemInterface;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.models.Product;
import br.com.rd.Backend.repositories.OrderItemRepository;
import br.com.rd.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("OrderItemService")
public class OrderItemService implements OrderItemInterface {

    @Autowired
    OrderItemRepository orderItemRepository;

    @Autowired
    ProductService productService;

    @Autowired
    ProductRepository productRepository;

    Converter converter = new Converter();

    @Override
    public ResponseEntity saveOrderItem(List<OrderItem> list) {

        List<Product> productList = new ArrayList<>();

        Double sum = 0.0;
        // Check if the orders are valid
        for (OrderItem orderItem: list) {

            Product product = productRepository.findById(orderItem.getIdProduct().getIdProduct()).get();

            if (product.getQuantStock() < orderItem.getQuantity()){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).
                        body("Estoque insuficiente para o produto: " + product.getIdProduct());
            }

            // Remove this products in stock
            product.setQuantStock(product.getQuantStock() - orderItem.getQuantity());
            orderItem.setPrice(product.getPrice() * orderItem.getQuantity());

            productList.add(product);
            sum += orderItem.getPrice();
        }

        for (Product product : productList)
            productService.updateProductById(converter.converterTo(product));


        return ResponseEntity.status(HttpStatus.ACCEPTED).body(sum);
    }

    @Override
    public ResponseEntity<List<OrderItem>> findAllOrderItems() {
        return ResponseEntity.ok().body(orderItemRepository.findAll());
    }
}
