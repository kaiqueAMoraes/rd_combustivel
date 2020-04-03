package br.com.rd.Backend.MailConfig;

import java.util.Arrays;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringEmailMain {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(
				SpringEmailMain.class.getPackage().getName());
		
		Mailer mailer = applicationContext.getBean(Mailer.class);
		mailer.enviar(new Messenger(
				"Origin Combustível <origin.combustivel@gmail.com>",
				"aryanaagustavo.aa@gmail.com",
				"Teste E-mail",
				"Teste de e-mail para Esqueceu a senha"));
		
		applicationContext.close();
		
		System.out.println("Enviado!");
	}
}