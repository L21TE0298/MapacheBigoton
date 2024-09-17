-- Crear tabla cliente
CREATE TABLE cliente (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    direccion VARCHAR(100),
    telefono VARCHAR(20)
);

-- Crear tabla barbero
CREATE TABLE barbero (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    Servicio VARCHAR(50)
);