CREATE DATABASE MapacheBigoton;

create table Barbero
(
	ID_Barbero int auto_increment primary key not null,
    nombre varchar(100)
);

create table Cliente
(
	ID_Cliente int auto_increment primary key not null,
    telefono varchar(10) not null
);

create table Servicio
(
	ID_Servicio int auto_increment primary key not null,
    descripcion varchar(250) not null
);

create table Cita
(
	ID_Cita int auto_increment primary key not null,
    fecha date not null,
    hora time not null,
    ID_Cliente int not null,
    ID_Servicio int not null
);