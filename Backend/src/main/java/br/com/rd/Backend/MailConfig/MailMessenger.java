package br.com.rd.Backend.MailConfig;

import br.com.rd.Backend.models.User;
import lombok.Data;

import java.util.List;

@Data
public class MailMessenger {

    private String sender;
    private String recipient;
    private String subject;
    private String bodyMail;

    public MailMessenger(String sender, String recipient, String subject, String bodyMail) {
        this.sender = sender;
        this.recipient = recipient;
        this.subject = subject;
        this.bodyMail = bodyMail;
    }
}
