package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long idUser;

    @NotBlank(message = "Nome não foi informado")
    @Column(name = "ds_firstName", nullable = false)
    private String firstName;

    @NotBlank (message = "Sobrenome não foi informado")
    @Column(name = "ds_lastName", nullable = false)
    private String lastName;

    @NotBlank
    @CPF(message = "Número de CPF inválido")
    @Column(name = "ds_cpf", nullable = false)
    private String cpf;

    @Email
    @Column(name = "ds_email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "dt_birth", nullable = true)
    @Temporal(TemporalType.DATE)
    private Date birth;

    @Column(name = "ds_gender", nullable = true)
    private String gender;

    @Column(name = "ds_phone", nullable = false)
    private String phone;
}
