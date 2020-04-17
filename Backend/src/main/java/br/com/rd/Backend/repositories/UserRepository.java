package br.com.rd.Backend.repositories;

import br.com.rd.Backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail (String email);
    List<User> findByCpf (String cpf);
    User findByEmailAndPassword (String email, String password);
}