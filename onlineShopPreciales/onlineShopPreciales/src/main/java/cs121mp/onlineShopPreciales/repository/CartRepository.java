package cs121mp.onlineShopPreciales.repository;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart,Integer> {
    public List<Cart> findByBuyerId(Integer buyer_id);
    public Optional<Cart> findByBuyerIdAndProductId(Integer buyer_id,Integer product_id);
    public void deleteByProductId(Integer productId);
}
