package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.model.Sales;
import cs121mp.onlineShopPreciales.model.Seller;
import cs121mp.onlineShopPreciales.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class SalesController {
    @Autowired
    SalesService salesService;

    @GetMapping("/getSales")
    public ResponseEntity<List<Sales>> getSales(){
        return ResponseEntity.ok(salesService.getAllSales());
    }

    @PostMapping("/addTransaction")
    public ResponseEntity<Void> addSales(@RequestBody Sales payload){
        if (payload.getTransactionId() == null) {
            payload.setTransactionId(null);
        }
        if (payload.getDatePurchased() == null) {
            payload.setDatePurchased(null);
        }
        salesService.addTransaction(payload);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/deleteTransaction/{transaction_id}")
    public ResponseEntity<Void> deleteSales(@PathVariable String transaction_id){
        salesService.deleteTransaction(Integer.valueOf(transaction_id));
        return ResponseEntity.ok(null);}

}
