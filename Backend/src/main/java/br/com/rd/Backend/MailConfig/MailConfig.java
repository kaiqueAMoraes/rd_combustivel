package br.com.rd.Backend.MailConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
@PropertySource("classpath:envio/mail.properties")
public class MailConfig {

    @Autowired
    private Environment mailProperties;

    @Bean
    public JavaMailSender mailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost(mailProperties.getProperty("mail.smtp.host"));
        mailSender.setPort((mailProperties.getProperty("mail.smtp.port", Integer.class)));
        mailSender.setUsername(mailProperties.getProperty("mail.smtp.username"));
        mailSender.setPassword(mailProperties.getProperty("mail.smtp.password"));

        Properties props = new Properties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", true);
        props.put("mail.smtp.connectiontimeout", 10000);

        mailSender.setJavaMailProperties(props);

        return mailSender;
    }
}
