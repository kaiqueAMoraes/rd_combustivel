package br.com.rd.Backend.MailConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class Mailer {

	@Autowired
	private Environment env;

	@Autowired
	private JavaMailSender javaMailSender;


	public void enviar(Messenger messenger) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		
		simpleMailMessage.setFrom(env.getProperty("mail.from")); // Getting from mail.properties
		simpleMailMessage.setTo(messenger.getReceiver());
		simpleMailMessage.setSubject(messenger.getSubject());
		simpleMailMessage.setText(messenger.getText());
		
		javaMailSender.send(simpleMailMessage);
	}

}