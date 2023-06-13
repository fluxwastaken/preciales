package cs121mp.onlineShopPreciales.repository;

import cs121mp.onlineShopPreciales.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    public List<Product> findByProductNameContainsIgnoreCase(String keyword);
//    public List<Product> findByCategory(String keyword);
}
