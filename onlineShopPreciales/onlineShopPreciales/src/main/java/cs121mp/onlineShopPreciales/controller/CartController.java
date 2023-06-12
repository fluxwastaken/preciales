package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Cart;
import cs121mp.onlineShopPreciales.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @GetMapping("/getCart/{buyer_id}")
    public ResponseEntity<List<Cart>> getCart(@PathVariable String buyer_id) {return ResponseEntity.ok(cartService.getCart(Integer.valueOf(buyer_id)));}
    @GetMapping("/getCart")
    public ResponseEntity< Optional<Cart>> getProduct(@RequestParam String buyer_id, @RequestParam String product_id){
        return ResponseEntity.ok(cartService.getProduct(Integer.valueOf(buyer_id),Integer.valueOf(product_id)));
    }

    @PostMapping("/addCartProduct")
    public ResponseEntity<Void> addCartProduct(@RequestBody Cart payload) {
        if (payload.getCartId() == null) {
            payload.setCartId(null);
        }
        cartService.addOrUpdateCartItem(payload);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/updateCart")
    public ResponseEntity<Cart> updateProductQuantity(
            @RequestParam("buyer_id") String buyerId,
            @RequestParam("product_id") String productId,
            @RequestParam("quantity") String quantity) {

        Optional<Cart> cartOptional = cartService.getProduct(Integer.valueOf(buyerId), Integer.valueOf(productId));

        if (cartOptional.isPresent()) {
            Cart cart = cartOptional.get();
            cart.setProductQty(Integer.valueOf(quantity));
            cartService.save(cart); // Save the updated cart entity

            return ResponseEntity.ok(cart);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/deleteCart/{cart_id}")
    public ResponseEntity<Void> deleteBuyer(@PathVariable String cart_id){
        cartService.deleteCartItem(Integer.valueOf(cart_id));
        return ResponseEntity.ok(null);
    }
}
