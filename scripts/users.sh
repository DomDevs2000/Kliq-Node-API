!#/bin/bash
# sets up database
# PASSWORD IS YOUR MYSQL ROOT PASSWORD
mysql -u root -p joinkliq_users <src/database/users.sql
# imports csv file
# PASSWORD IS joinkliq
mysqlimport --ignore-lines=1 --fields-terminated-by=',' --verbose --local -u joinkliq -p joinkliq_users src/database/users.csv

# install dependencies
npm install

# run the server
npm run start
