package br.com.rd.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrder;

    @Column(name = "vl_total_price", nullable = false)
    private Double totalPrice;

    @Column(name = "dt_order", nullable = false)
    private Date date;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User idUser;

    @ManyToOne
    @JoinColumn(name = "id_address")
    private Address idAddress;

    @OneToOne(targetEntity = OrderItem.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "order_itens")
    private List<OrderItem> list;

}
