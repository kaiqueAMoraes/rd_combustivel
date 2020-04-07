package br.com.rd.Backend.configuration;

import br.com.rd.Backend.services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    CustomUserDetailsService customUserDetailsService;

    protected void configure(HttpSecurity http) throws Exception {
        http
                //Pedir para que todas as rotas sejam autorizadas
                .authorizeRequests().antMatchers("/create-user", "/find-user/{id}", "/find-user-email/{email}")
                .permitAll()


                //Tirar sessão da aplicação
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and().httpBasic()
                //Desabilitar token
                .and().csrf().disable();
    }

//    @Autowired
//    public void createUser(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(customUserDetailsService).passwordEncoder(new BCryptPasswordEncoder());
//    }


}
