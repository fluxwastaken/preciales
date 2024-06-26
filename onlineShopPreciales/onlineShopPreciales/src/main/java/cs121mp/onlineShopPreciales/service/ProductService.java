package cs121mp.onlineShopPreciales.service;

import cs121mp.onlineShopPreciales.model.Product;
import cs121mp.onlineShopPreciales.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    public List<Product> getAllProducts() {return productRepository.findAll();}

    public void addProduct(Product product) {productRepository.save(product);}

    public List<Product> searchProduct(String keyword) {return productRepository.findByProductNameContainsIgnoreCase(keyword);}

//    public List<Product> searchCategory(String keyword) {return productRepository.findByCategory(keyword);}

    public void deleteProduct(Integer product_id) {productRepository.deleteById(product_id);}
    public Optional<Product> getProductInfo(Integer product_id){return productRepository.findById(product_id);}
}
