package br.com.rd.Backend.MailConfig;

import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.repositories.ProductRepository;
import br.com.rd.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class Cart {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    public String cartItems(Order order){

        StringBuilder sb = new StringBuilder();
        sb.append("Aqui estão os dados do seu pedido Sr(a)." +
                userRepository.findById(order.getIdUser().getIdUser()).get().getFirstName());
        sb.append("----------------------------------------------");

        order.getItemList().forEach(orderItem -> {
            String productName = productRepository.findById(orderItem.getIdProduct().getIdProduct()).get().getName();
            Integer quantity = orderItem.getQuantity();
            sb.append("Nome do Produto: "
                    + productName
                    + "\n"
                    + "Quantidade: "
                    + orderItem.getQuantity()
                    + "\n");
        });


        return sb.toString();
    }

}
