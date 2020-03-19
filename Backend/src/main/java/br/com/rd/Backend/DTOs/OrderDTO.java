package br.com.rd.Backend.DTOs;

import br.com.rd.Backend.models.Address;
import br.com.rd.Backend.models.OrderItem;
import br.com.rd.Backend.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    private Long idOrder;
    private Double totalPrice;
    private Date date;
    private User idUser;
    private Address idAddress;
    private List<OrderItem> list;
}
