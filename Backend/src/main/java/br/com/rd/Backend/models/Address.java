package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.websocket.OnClose;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_address")
    private Long idAddress;

    @NotBlank(message = "CEP não foi informado")
    @Column(name = "CEP", nullable = false)
    private String cep;

    @NotBlank(message = "Estado não foi informado")
    @Column(name = "ds_state", nullable = false)
    private String state;

    @NotBlank(message = "Cidade não foi informada")
    @Column(name = "ds_city", nullable = false)
    private String city;

    @NotBlank(message = "Bairro não foi informado")
    @Column(name = "ds_district", nullable = false)
    private String district;

    @NotBlank(message = "Endereço não foi informado")
    @Column(name = "ds_street", nullable = false)
    private String street;

    @Column(name = "ds_number", nullable = false)
    private String number;

    @Column(name = "ds_complement", nullable = true)
    private String complement;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User idUser;
}
