CREATE USER IF NOT EXISTS 'joinkliq'@'localhost' IDENTIFIED BY 'joinkliq';
GRANT ALL PRIVILEGES ON * . * TO 'joinkliq'@'localhost';
CREATE DATABASE IF NOT EXISTS joinkliq_users;
use joinkliq_users;
SET GLOBAL local_infile=1;
/* create table */
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) NOT NULL,
    application_id INT(100)  NULL,
    first_name VARCHAR(50)  NULL,
    last_name VARCHAR(50)  NULL,
    email VARCHAR(100) UNIQUE  NULL,
    password VARCHAR(100)  NULL,
    phone_number VARCHAR(20)  NULL,
    photo_url VARCHAR(255)  NULL,
    referral_url VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

