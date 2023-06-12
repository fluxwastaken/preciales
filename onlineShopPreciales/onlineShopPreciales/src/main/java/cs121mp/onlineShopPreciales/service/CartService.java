package cs121mp.onlineShopPreciales.service;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Cart;
import cs121mp.onlineShopPreciales.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    public List<Cart> getCart(Integer buyer_id) {return cartRepository.findByBuyerId(buyer_id);}
    public Optional<Cart> getProduct(Integer buyer_id,Integer product_id){return cartRepository.findByBuyerIdAndProductId(buyer_id,product_id);}
//    public void addOrUpdateCartItem(Cart cartItem) {
//        cartRepository.save(cartItem);
//    }
    public void addOrUpdateCartItem(Cart cartItem) {
        Optional<Cart> existingCartItem = cartRepository.findByBuyerIdAndProductId(cartItem.getBuyerId(), cartItem.getProductId());
        if (existingCartItem.isPresent()) {
            Cart existingCart = existingCartItem.get();
            existingCart.setProductQty(existingCart.getProductQty() + cartItem.getProductQty());
            cartRepository.save(existingCart);
        } else {
            cartRepository.save(cartItem);
        }
    }
    public void deleteCartItem(Integer cart_id){ cartRepository.deleteById(cart_id);}
    public void save(Cart cart) { cartRepository.save(cart);}
}
