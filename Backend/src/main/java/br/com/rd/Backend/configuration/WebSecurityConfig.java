package br.com.rd.Backend.configuration;

import br.com.rd.Backend.models.User;

public class AuthenticationConfig {

    public boolean autentica(User user) {
        String loginUser = user.getEmail();
        String passwordUser = user.getPassword();

        User userPasswordHas = this
    }
}
