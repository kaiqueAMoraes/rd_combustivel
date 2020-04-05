package br.com.rd.Backend.repositories;

import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByDate(Date date);
    List<Order> findByIdUser(User user);

}
