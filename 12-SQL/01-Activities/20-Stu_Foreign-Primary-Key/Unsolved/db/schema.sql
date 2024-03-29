-- Write your Schema Here -- 
DROP DATABASE IF EXISTS this_db;

CREATE DATABASE this_db;

use this_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customer_id INT NOT NULL,
    order_details TEXT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);