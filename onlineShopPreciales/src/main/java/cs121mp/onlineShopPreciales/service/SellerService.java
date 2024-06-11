package cs121mp.onlineShopPreciales.service;

import cs121mp.onlineShopPreciales.model.Buyer;
import cs121mp.onlineShopPreciales.model.Seller;
import cs121mp.onlineShopPreciales.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class SellerService {
    @Autowired
    SellerRepository sellerRepository;
    public List<Seller> getAllSellers(){return sellerRepository.findAll();}
    public void addSeller(Seller seller){sellerRepository.save(seller);}
    public List<Seller> searchSeller(String keyword){return sellerRepository.findBySellerNameContains(keyword);}
    public Optional<Seller> searchSellerEmail(String keyword){ return sellerRepository.findBySellerEmail(keyword);}
    public Optional<Seller> getSellerInfo(Integer seller_id){return sellerRepository.findById(seller_id);}
}
