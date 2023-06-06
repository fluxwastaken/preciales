package cs121mp.onlineShopPreciales.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    @JsonProperty("product_id")
    Integer productId;

    @Column(name = "seller_id")
    @JsonProperty("seller_id")
    Integer sellerId;

    @Column(name = "product_name")
    @JsonProperty("product_name")
    String productName;

    @Column(name = "category")
    @JsonProperty("category")
    String productCategory;

    @Column(name = "quantity")
    @JsonProperty("quantity")
    Integer productQty;

    @Column(name = "price")
    @JsonProperty("price")
    Double productPrice;

    @Column(name = "description")
    @JsonProperty("description")
    String productDescription;

    @Lob
    @Column(name = "picture")
    @JsonProperty("picture")
    Byte productPicture;

    public Product(){

    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public Integer getProductQty() {
        return productQty;
    }

    public void setProductQty(Integer productQty) {
        this.productQty = productQty;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Byte getProductPicture() {
        return productPicture;
    }

    public void setProductPicture(Byte productPicture) {
        this.productPicture = productPicture;
    }
}
