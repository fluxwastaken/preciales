package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.model.Cart;
import cs121mp.onlineShopPreciales.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @GetMapping("/getCart/{buyer_id}")
    public ResponseEntity<List<Cart>> getCart(@PathVariable String buyer_id) {return ResponseEntity.ok(cartService.getCart(Integer.valueOf(buyer_id)));}
}
