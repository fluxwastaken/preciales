package cs121mp.onlineShopPreciales.repository;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SellerRepository extends JpaRepository<Seller,Integer> {
    public List<Seller> findBySellerNameContains(String keyword);
    public Optional<Seller> findBySellerEmail(String keyword);
}
