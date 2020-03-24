mysql -u root -pcoti
create database DBdaviVSGolias;
use DBdaviVSGolias;

create table cliente (id int primary key
auto_increment, 
nome varchar (50),
email varchar (50) unique);

use DBdaviVSGolias;

insert into cliente values(null,'sidnei','sidnei@gmail.com');
insert into cliente  values (null,'jo','joonze@gmail.com');
insert into cliente values (null,'ale','ale@gmail.com');

