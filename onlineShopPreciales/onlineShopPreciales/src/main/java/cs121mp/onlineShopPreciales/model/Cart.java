package cs121mp.onlineShopPreciales.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    @JsonProperty("cart_id")
    Integer cartId;

    @Column(name = "buyer_id")
    @JsonProperty("buyer_id")
    Integer buyerId;

    @Column(name = "product_id")
    @JsonProperty("product_id")
    Integer productId;

    @Column(name="product_name")
    @JsonProperty("product_name")
    String productName;

    @Column(name = "quantity")
    @JsonProperty("quantity")
    Integer productQty;


    @Column(name = "price")
    @JsonProperty("price")
    Double productPrice;

    @Column(name = "picture")
    @JsonProperty("picture")
    String productPicture;

    public Cart() {
    }

    public Integer getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(Integer buyerId) {
        this.buyerId = buyerId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getProductQty() {
        return productQty;
    }

    public void setProductQty(Integer productQty) {
        this.productQty = productQty;
    }
    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }
    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }
}
