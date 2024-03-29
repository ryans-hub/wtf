DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

use movie_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    movie_name VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT NOT NULL,
    review TEXT,
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);