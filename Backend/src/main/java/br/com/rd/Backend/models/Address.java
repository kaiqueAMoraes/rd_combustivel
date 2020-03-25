package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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

    @Column(name = "CEP", nullable = false)
    private String cep;

    @Column(name = "ds_state", nullable = false)
    private String state;

    @Column(name = "ds_city", nullable = false)
    private String city;

    @Column(name = "ds_district", nullable = false)
    private String district;

    @Column(name = "ds_street", nullable = false)
    private String street;

    @Column(name = "ds_number", nullable = false)
    private String number;

    @Column(name = "ds_complement")
    private String complement;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User idUser;
}
