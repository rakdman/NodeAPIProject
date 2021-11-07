CREATE TABLE users (
  id int default null,
  full_name varchar(45) DEFAULT NULL,
  street_name varchar(45) DEFAULT NULL,
  city_name varchar(45) DEFAULT NULL,
  postal_code int default null
) ;


CREATE TABLE web_database.login (
  id int not null ,
  user_name varchar(45) DEFAULT NULL,
  password varchar(45) DEFAULT NULL,
  email varchar(100) DEFAULT NULL
) ;

