package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Product;
import cs121mp.onlineShopPreciales.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ProductController {
    @Autowired
    ProductService ProductService;

    @GetMapping("/getProducts")
    public ResponseEntity<List<Product>> getProducts() {return ResponseEntity.ok(ProductService.getAllProducts());}

    @PostMapping("/addProduct")
    public ResponseEntity<Void> addProduct(@RequestBody Product payload){
        if(payload.getProductId()==null){
            payload.setProductId(null);
        }
        ProductService.addProduct(payload);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/searchProduct")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword){
        return ResponseEntity.ok(ProductService.searchProduct(keyword));
    }

//    @GetMapping("/searchCategory")
//    public ResponseEntity<List<Product>> searchCategory(@RequestParam String keyword){
//        return ResponseEntity.ok(ProductService.searchCategory(keyword));
//    }

    @GetMapping("/deleteProduct/{product_id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String product_id){
        ProductService.deleteProduct(Integer.valueOf(product_id));
        return ResponseEntity.ok(null);
    }

    @GetMapping("/getProductInfo/{product_id}")
    public ResponseEntity<Optional<Product>> getInfo(@PathVariable String product_id){
        return ResponseEntity.ok(ProductService.getProductInfo(Integer.valueOf(product_id)));
    }

    @PatchMapping("/updateProductInfo/{product_id}")
    public ResponseEntity<Product> updateProductInfo(@PathVariable String product_id, @RequestBody Product updatedProduct) {
        Optional<Product> existingProduct = ProductService.getProductInfo(Integer.valueOf(product_id));

        if (existingProduct.isPresent()) {
            // Update the fields of the existing product with the values from the updatedProduct
            Product productToUpdate = existingProduct.get();
            if (updatedProduct.getProductName() != null) {
                productToUpdate.setProductName(updatedProduct.getProductName());
            }
            if (updatedProduct.getProductCategory() != null) {
                productToUpdate.setProductCategory(updatedProduct.getProductCategory());
            }
            if (updatedProduct.getProductQty() != null) {
                productToUpdate.setProductQty(updatedProduct.getProductQty());
            }
            if (updatedProduct.getProductPrice() != null) {
                productToUpdate.setProductPrice(updatedProduct.getProductPrice());
            }
            if (updatedProduct.getProductDescription() != null) {
                productToUpdate.setProductDescription(updatedProduct.getProductDescription());
            }
            if (updatedProduct.getProductPicture() != null) {
                productToUpdate.setProductPicture(updatedProduct.getProductPicture());
            }

            // Save the updated product in the ProductService
            ProductService.addProduct(productToUpdate);

            return ResponseEntity.ok(productToUpdate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
