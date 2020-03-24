package br.com.rd.Backend.repositories;

import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository <Address, Long> {
    List<Address> findByIdUser (User user);
}
