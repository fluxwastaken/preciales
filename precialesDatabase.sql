CREATE SCHEMA userdatabase

CREATE TABLE userdatabase.buyers(
buyer_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
buyer_name TEXT NOT NULL,
buyer_email TEXT NOT NULL UNIQUE,
buyer_password TEXT NOT NULL
)

INSERT INTO userdatabase.buyers(buyer_name, buyer_email, buyer_password)
VALUES ('Cloud Presas', 'cmpresas@example.com', 'password123');

CREATE TABLE userdatabase.sellers(
seller_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
seller_name TEXT NOT NULL,
seller_email TEXT NOT NULL UNIQUE,
seller_password TEXT NOT NULL
)

INSERT INTO userdatabase.sellers(seller_name,seller_email,seller_password)
VALUES('Frank Ocean','focean@example.com','password123')

CREATE TABLE userdatabase.products(
product_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
product_name TEXT NOT NULL,
category TEXT NOT NULL,
quantity INT NOT NULL,
price DOUBLE PRECISION NOT NULL,
description TEXT DEFAULT 'n/a',
picture VARCHAR
)

INSERT INTO userdatabase.products
VALUES(1,'SERUM','Skincare Product',10,349.00,'test', '/images/1.jpg')


CREATE TABLE userdatabase.carts(
cart_id SERIAL NOT NULL PRIMARY KEY,
buyer_id INT NOT NULL REFERENCES userdatabase.buyers(buyer_id),
product_id INT NOT NULL REFERENCES userdatabase.products(product_id),
product_name TEXT NOT NULL,
quantity INT NOT NULL,
price DOUBLE PRECISION NOT NULL,
picture VARCHAR
)

CREATE TABLE userdatabase.sales(
transaction_id SERIAL NOT NULL PRIMARY KEY,
buyer_id INT NOT NULL REFERENCES userdatabase.buyers(buyer_id),
buyer_email TEXT NOT NULL UNIQUE,
items TEXT NOT NULL,
sale_quantity INT NOT NULL,
sale_price DOUBLE PRECISION NOT NULL,
date_purchased DATE
)

INSERT INTO userdatabase.carts
VALUES(1,1,1,5)

SELECT * FROM userdatabase.carts

SELECT * FROM userdatabase.products