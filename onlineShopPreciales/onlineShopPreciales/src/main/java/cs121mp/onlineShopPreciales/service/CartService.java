package cs121mp.onlineShopPreciales.service;

import cs121mp.onlineShopPreciales.model.Cart;
import cs121mp.onlineShopPreciales.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    public List<Cart> getCart(Integer buyer_id) {return cartRepository.findByBuyerId(buyer_id);}

}
