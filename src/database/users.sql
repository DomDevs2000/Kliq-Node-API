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
    referred_by_id INT,
    stripe_id VARCHAR(255),
    user_type VARCHAR(50),
    status_id INT,
    is_email_verified BOOLEAN,
    verification_email_send_date TIMESTAMP,
    email_verification_token VARCHAR(255),
    is_subscribed BOOLEAN,
    is_test_user BOOLEAN,
    firebase_uid VARCHAR(255),
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT,
    updated_by INT,
    enable_one_to_one_session BOOLEAN,
    remaining_sessions INT,
    show_one_to_one_history BOOLEAN,
    register_type VARCHAR(50),
    is_backed_up BOOLEAN,
    PRIMARY KEY (id)
);

