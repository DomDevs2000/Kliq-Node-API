!#/bin/bash
# sets up database
mysql -u root -p joinkliq_users <src/database/users.sql
#imports csv file
mysqlimport --ignore-lines=1 --fields-terminated-by=',' --verbose --local -u joinkliq -p joinkliq_users src/database/users.csv
