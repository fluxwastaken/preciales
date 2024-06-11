package cs121mp.onlineShopPreciales.service;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuyerService {
    @Autowired
    BuyerRepository buyerRepository;
    public List<Buyer> getAllBuyers(){
        return buyerRepository.findAll();
    }
    public void addBuyer(Buyer buyer){
        buyerRepository.save(buyer);
    }
    public List<Buyer> searchBuyer(String keyword){
        return buyerRepository.findByBuyerNameContains(keyword);
    }
    public Optional<Buyer> searchBuyerEmail(String keyword){ return buyerRepository.findByBuyerEmail(keyword);}
    public Optional<Buyer> getBuyerInfo(Integer buyer_id){
        return buyerRepository.findById(buyer_id);
    }

    public void deleteBuyer(Integer buyer_id){ buyerRepository.deleteById(buyer_id);}

}
