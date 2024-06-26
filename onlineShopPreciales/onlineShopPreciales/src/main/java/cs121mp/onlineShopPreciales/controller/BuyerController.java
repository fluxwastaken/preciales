package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.service.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
public class BuyerController {
    @Autowired
    BuyerService BuyerService;

    @GetMapping("/getBuyers")
    public ResponseEntity<List<Buyer>> getBuyers(){
        return ResponseEntity.ok(BuyerService.getAllBuyers());
    }

    @PostMapping("/addBuyer")
    public ResponseEntity<Void> addBuyer(@RequestBody Buyer payload){
        if (payload.getBuyerId() == null) {
            payload.setBuyerId(null);
        }
        BuyerService.addBuyer(payload);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/searchBuyer")
    public ResponseEntity<List<Buyer>> searchBuyer(@RequestParam String keyword){
        return ResponseEntity.ok(BuyerService.searchBuyer(keyword));
    }
    @GetMapping("/searchBuyerEmail")
    public ResponseEntity<Optional<Buyer>> searchBuyerEmail(@RequestParam String keyword){
        return ResponseEntity.ok(BuyerService.searchBuyerEmail(keyword));
    }

    @GetMapping("/getBuyerInfo/{buyer_id}")
    public ResponseEntity<Optional<Buyer>> getInfo(@PathVariable String buyer_id){
        return ResponseEntity.ok(BuyerService.getBuyerInfo(Integer.valueOf(buyer_id)));
    }
    @GetMapping("/deleteBuyer/{buyer_id}")
    public ResponseEntity<Void> deleteBuyer(@PathVariable String buyer_id){
        BuyerService.deleteBuyer(Integer.valueOf(buyer_id));
        return ResponseEntity.ok(null);
    }
}
