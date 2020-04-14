package br.com.rd.Backend.interfaces;

import br.com.rd.Backend.DTOs.AddressDTO;
import br.com.rd.Backend.DTOs.OrderDTO;
import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.User;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.Date;
import java.util.List;

public interface OrderInterface {

    ResponseEntity save(OrderDTO orderDTO);

    ResponseEntity deleteById(Long id);

    ResponseEntity findById(Long id);

    ResponseEntity findByUser(User user);

    ResponseEntity findByDate(Date date);

    ResponseEntity<?> findAll(Pageable pageable);

    ResponseEntity update(OrderDTO orderDTO);
}
