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
seller_id INT NOT NULL UNIQUE REFERENCES userdatabase.sellers(seller_id),
product_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
product_name TEXT NOT NULL,
category TEXT NOT NULL,
quantity INT NOT NULL,
price DOUBLE PRECISION NOT NULL,
description TEXT DEFAULT 'n/a',
picture BYTEA
)