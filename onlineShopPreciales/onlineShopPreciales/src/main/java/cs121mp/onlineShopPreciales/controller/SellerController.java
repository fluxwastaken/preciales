package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Seller;
import cs121mp.onlineShopPreciales.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SellerController {
    @Autowired
    SellerService sellerService;

    @GetMapping("/getSellers")
    public ResponseEntity<List<Seller>> getSellers(){
        return ResponseEntity.ok(sellerService.getAllSellers());
    }

    @PostMapping("/addSeller")
    public ResponseEntity<Void> addSeller(@RequestBody Seller payload){
        sellerService.addSeller(payload);
        return ResponseEntity.ok(null);
    }
    @GetMapping("/searchSeller")
    public ResponseEntity<List<Seller>> searchSeller(@RequestParam String keyword){
        return ResponseEntity.ok(sellerService.searchSeller(keyword));
    }
    @GetMapping("/getSellerInfo/{seller_id}")
    public ResponseEntity<Optional<Seller>> getInfo(@PathVariable String seller_id){
        return ResponseEntity.ok(sellerService.getSellerInfo(Integer.valueOf(seller_id)));
    }
}
