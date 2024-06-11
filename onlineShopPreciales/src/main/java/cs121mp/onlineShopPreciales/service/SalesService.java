package cs121mp.onlineShopPreciales.service;

import cs121mp.onlineShopPreciales.model.Sales;
import cs121mp.onlineShopPreciales.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesService {
    @Autowired
    SalesRepository salesRepository;

    public List<Sales> getAllSales(){return salesRepository.findAll();}

    public Sales addTransaction(Sales sales){return salesRepository.save(sales);}
    public void deleteTransaction(Integer transaction_id) {salesRepository.deleteById(transaction_id);}

}
