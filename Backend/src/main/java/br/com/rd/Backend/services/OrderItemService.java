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
    public ResponseEntity saveOrderItem(OrderItemDTO orderItemDTO) {
//
//        Converter converter = new Converter();
//
//        OrderItem orderItem = converter.converterTo(orderItemDTO);
//
//        Product product = orderItemDTO.getIdProduct();
//
//        Product updateProduct = productRepository.findById(product.getIdProduct()).get();
//        if (updateProduct.getQuantStock() < orderItem.getQuantity()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Estoque insuficiente");
//        } else {
//            updateProduct.setQuantStock(updateProduct.getQuantStock() - orderItem.getQuantity());
//
//            orderItem.setPrice(updateProduct.getPrice() * orderItemDTO.getQuantity());
//
//            productService.updateProductById(converter.converterTo(updateProduct));
//
//            orderItemRepository.save(orderItem);
            return ResponseEntity.status(200).body("Item Salvo!");
        }

    @Override
    public ResponseEntity findOrderItemByIdOrder(Order order) {
        return null;
    }

    @Override
    public ResponseEntity<List<OrderItem>> findAllOrderItems() {
        return null;
    }
}
