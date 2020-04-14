package br.com.rd.Backend.auth.service;

import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email);
        UserBuilder userBuilder;

        if(user == null) {
            userBuilder = org.springframework.security.core.userdetails.User.withUsername(email);
            userBuilder.password(user.getPassword());
        } else {
            throw new UsernameNotFoundException("User not found!");
        }

        return userBuilder.build();
    }
}
