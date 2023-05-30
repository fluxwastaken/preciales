package cs121mp.onlineShopPreciales.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "sellers")
public class Seller {
    @Id
    @Column(name = "seller_id")
    @JsonProperty("seller_id")
    Integer sellerId;

    @Column(name = "seller_name")
    @JsonProperty("seller_name")
    String sellerName;

    @Column(name = "seller_email")
    @JsonProperty("seller_email")
    String sellerEmail;

    @Column(name = "seller_password")
    @JsonProperty("seller_password")
    String sellerPassword;

    public Seller(){

    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getSellerEmail() {
        return sellerEmail;
    }

    public void setSellerEmail(String sellerEmail) {
        this.sellerEmail = sellerEmail;
    }

    public String getSellerPassword() {
        return sellerPassword;
    }

    public void setSellerPassword(String sellerPassword) {
        this.sellerPassword = sellerPassword;
    }
}
