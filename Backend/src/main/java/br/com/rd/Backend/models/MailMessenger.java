package br.com.rd.Backend.models;

import br.com.rd.Backend.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MailMessenger {

    private String sender;
    private String recipient;
    private String subject;
    private String bodyMail;

}
