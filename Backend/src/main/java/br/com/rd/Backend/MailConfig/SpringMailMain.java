package br.com.rd.Backend.MailConfig;

import br.com.rd.Backend.models.MailMessenger;
import br.com.rd.Backend.services.MailService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMailMain {

//    public static void main(String[] args) {
//        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(
//                SpringMailMain.class.getPackage().getName());
//
//        MailService mailService = applicationContext.getBean(MailService.class);
//        mailService.enviar(new MailMessenger(
//                "origin.combustivel@gmail.com",
//                "aryana.silva@usp.br",
//                "Teste Esqueci minha senha",
//                "Clique no link para recuperar a senha"
//                ));
//
//        applicationContext.close();
//
//        System.out.println("E-mail enviado!");
//    }
}
