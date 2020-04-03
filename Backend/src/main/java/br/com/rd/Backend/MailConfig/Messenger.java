package br.com.rd.Backend.MailConfig;

import java.util.List;


public class Messenger {
	
	private String sender;
	
	private List<String> receiver;
	
	private String subject;
	
	private String text;

	public Messenger(String sender, List<String> receiver, String subject, String text) {
		this.sender = sender;
		this.receiver = receiver;
		this.subject = subject;
		this.text = text;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public List<String> getReceiver() {
		return receiver;
	}

	public void setReceiver(List<String> receiver) {
		this.receiver = receiver;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
