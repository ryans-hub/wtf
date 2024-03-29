-- Write your schema here --

DROP DATABASE IF EXISTS my_db;
CREATE DATABASE my_db;

use my_db;

CREATE TABLE products (
    id INT NOT NULL,
    product_name VARCHAR(30),
    category_name VARCHAR (30),
    price INT NOT NULL,
    in_stock BOOLEAN
);

CREATE TABLE categories (
    id INT NOT NULL,
    category_name VARCHAR(30)
);