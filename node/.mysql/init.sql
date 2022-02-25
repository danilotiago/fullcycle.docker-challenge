CREATE DATABASE IF NOT EXISTS challenge_database;
USE challenge_database;

CREATE TABLE peoples(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);