package cs121mp.onlineShopPreciales.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "sales")
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    @JsonProperty("transaction_id")
    Integer transactionId;

    @Column(name = "buyer_id")
    @JsonProperty("buyer_id")
    Integer buyerId;

    @Column(name = "buyer_email")
    @JsonProperty("buyer_email")
    String buyerEmail;

    @Column(name = "items")
    @JsonProperty("items")
    String items;

    @Column(name = "sale_quantity")
    @JsonProperty("sale_quantity")
    Integer saleQuantity;

    @Column(name = "sale_price")
    @JsonProperty("sale_price")
    Double salePrice;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_purchased")
    @JsonProperty("date_purchased")
    Date datePurchased;

    @PrePersist
    protected void onCreate() {
        datePurchased = new Date();
    }

    public Integer getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }

    public Integer getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(Integer buyerId) {
        this.buyerId = buyerId;
    }

    public String getBuyerEmail() {
        return buyerEmail;
    }

    public void setBuyerEmail(String buyerEmail) {
        this.buyerEmail = buyerEmail;
    }

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    public Integer getSaleQuantity() {
        return saleQuantity;
    }

    public void setSaleQuantity(Integer saleQuantity) {
        this.saleQuantity = saleQuantity;
    }

    public Double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(Double salePrice) {
        this.salePrice = salePrice;
    }

    public Date getDatePurchased() {
        return datePurchased;
    }

    public void setDatePurchased(Date datePurchased) {
        this.datePurchased = datePurchased;
    }
}
