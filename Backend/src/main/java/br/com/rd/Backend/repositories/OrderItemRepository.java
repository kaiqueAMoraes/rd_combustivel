package br.com.rd.Backend.repositories;

import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository  extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findByIdOrder(Order order);
}
