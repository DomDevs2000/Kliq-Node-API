/* create new user */
CREATE USER IF NOT EXISTS 'joinkliq'@'localhost' IDENTIFIED BY 'joinkliq';
/*  give user  permissions*/
GRANT ALL PRIVILEGES ON * . * TO 'joinkliq'@'localhost';
/* create new database */
CREATE DATABASE IF NOT EXISTS joinkliq;
/* create table */
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    application_id INT(100)  NULL,
    first_name VARCHAR(50)  NULL,
    last_name VARCHAR(50)  NULL,
    email VARCHAR(100) UNIQUE  NULL,
    password VARCHAR(100)  NULL,
    phone_number VARCHAR(20)  NULL,
    photo_url VARCHAR(100)  NULL,
    referral_url VARCHAR(100) NULL
);
