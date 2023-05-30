package cs121mp.onlineShopPreciales.repository;

import cs121mp.onlineShopPreciales.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface BuyerRepository extends JpaRepository<Buyer,Integer> {

    public List<Buyer> findByBuyerNameContains(String keyword);
}
