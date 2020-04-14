package br.com.rd.Backend.repositories.custom;

import br.com.rd.Backend.models.User;

import java.util.List;

public interface CustomUserRepository {

    List<User> findAll();
}
