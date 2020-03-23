package br.com.rd.Backend.MailConfig;

import org.springframework.beans.factory.annotation.Autowired;
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
}
