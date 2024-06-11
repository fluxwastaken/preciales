package cs121mp.onlineShopPreciales.repository;

import cs121mp.onlineShopPreciales.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepository extends JpaRepository<Sales,Integer> {
}
