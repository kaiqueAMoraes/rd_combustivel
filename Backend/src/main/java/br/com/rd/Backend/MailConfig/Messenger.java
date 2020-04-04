package br.com.rd.Backend.MailConfig;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Messenger {
	
	private String receiver;
	private String subject;
	private String text;

}
