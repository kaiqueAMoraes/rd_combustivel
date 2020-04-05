package br.com.rd.Backend.MailConfig;

import br.com.rd.Backend.models.Order;
import br.com.rd.Backend.models.User;
import br.com.rd.Backend.repositories.ProductRepository;
import br.com.rd.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.util.GregorianCalendar;
import java.util.Locale;

@Service("Cart")
public class Cart {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    public String cartItems(Order order){

        StringBuilder sb = new StringBuilder();

        User user = userRepository.findById(order.getIdUser().getIdUser()).get();

        sb.append("Aqui estão os dados do seu pedido Sr" + (user.getGender().startsWith("F") ? "a" : "") + ". ");
        sb.append(user.getFirstName()).append("\n");
        sb.append("----------------------------------------------").append("\n");

        order.getItemList().forEach(orderItem -> {
            String productName = productRepository.findById(orderItem.getIdProduct().getIdProduct()).get().getName();
            Double value = productRepository.findById(orderItem.getIdProduct().getIdProduct()).get().getPrice() * orderItem.getQuantity();
            sb.append("Nome do Produto: "
                    + productName
                    + "\n"
                    + "Quantidade: "
                    + orderItem.getQuantity() + " litro" + (orderItem.getQuantity() > 1 ? "s" : "")
                    + "\n"
                    + "Valor: "
                    + NumberFormat.getCurrencyInstance(new Locale("pt", "BR")).format(value)
                    + "\n");
        });

        return sb.toString();

    }

}
