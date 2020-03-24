package br.com.rd.Backend.services;

import br.com.rd.Backend.DTOs.UserDTO;
import br.com.rd.Backend.MailConfig.SpringMailMain;
import br.com.rd.Backend.models.MailMessenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;


@Component
public class MailService {

    @Autowired
    JavaMailSender javaMailSender;

    public void enviar(MailMessenger mailMessenger) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom(mailMessenger.getSender());
        simpleMailMessage.setTo(mailMessenger.getRecipient());
        simpleMailMessage.setSubject(mailMessenger.getSubject());
        simpleMailMessage.setText(mailMessenger.getBodyMail());

        javaMailSender.send(simpleMailMessage);
    }

    public void recuperarSenha(String email, String body) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(
                SpringMailMain.class.getPackage().getName());

        MailService mailService = applicationContext.getBean(MailService.class);

        mailService.enviar(new MailMessenger(
                "origin.combustivel@gmail.com",
                email,
                "Origin Combustível - Recuperar senha",
                ""
                ));

        applicationContext.close();

        System.out.println("E-mail enviado!");
    }
}
