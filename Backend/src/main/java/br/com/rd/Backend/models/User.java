package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;

import javax.persistence.*;
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

    @Column(name = "ds_firstName", nullable = false)
    private String firstName;

    @Column(name = "ds_lastName", nullable = false)
    private String lastName;

    @Column(name = "ds_cpf", nullable = false)
    private String cpf;

    @Column(name = "ds_email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "dt_birth", nullable = false)
    private Date birth;

    @Column(name = "ds_gender")
    private String gender;

    @Column(name = "ds_phone", nullable = false)
    private String phone;

}
