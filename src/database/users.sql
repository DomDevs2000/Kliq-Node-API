/* create new user */
CREATE USER IF NOT EXISTS 'joinkliq'@'localhost' IDENTIFIED BY 'joinkliq';
/*  give user  permissions*/
GRANT ALL PRIVILEGES ON * . * TO 'joinkliq'@'localhost';
/* create new database */
CREATE DATABASE IF NOT EXISTS joinkliq;
/* create table */
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    application_id INT(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    photo_url VARCHAR(100) NOT NULL,
    referral_url VARCHAR(100) NOT NULL
);;
