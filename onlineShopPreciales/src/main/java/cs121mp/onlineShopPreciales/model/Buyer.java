package cs121mp.onlineShopPreciales.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "buyers")
public class Buyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "buyer_id")
    @JsonProperty("buyer_id")
    Integer buyerId;

    @Column(name = "buyer_name")
    @JsonProperty("buyer_name")
    String buyerName;

    @Column(name = "buyer_email")
    @JsonProperty("buyer_email")
    String buyerEmail;

    @Column(name = "buyer_password")
    @JsonProperty("buyer_password")
    String buyerPassword;

    public Buyer(){

    }

    public Integer getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(Integer buyerId) {
        this.buyerId = buyerId;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public String getBuyerEmail() {
        return buyerEmail;
    }

    public void setBuyerEmail(String buyerEmail) {
        this.buyerEmail = buyerEmail;
    }

    public String getBuyerPassword() {
        return buyerPassword;
    }

    public void setBuyerPassword(String buyerPassword) {
        this.buyerPassword = buyerPassword;
    }
}
