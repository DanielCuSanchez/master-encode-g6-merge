DROP DATABASE IF EXISTS jurassic;
CREATE DATABASE jurassic;
\c jurassic;
--Te mueve a la base de datos

-- CREATE TABLES
CREATE TABLE lugares (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL
);
CREATE TABLE tipos_incidentes (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL
);
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  "role" TEXT NOT NULL,
  "password" TEXT,
  email TEXT
);
CREATE TABLE incidentes (
  id SERIAL PRIMARY KEY,
  id_usuario INTEGER NOT NULL,
  id_lugar INTEGER NOT NULL,
  id_tipo_incidente INTEGER NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0)
);
-- END CREATE TABLES

-- CONSTRAINTS
ALTER TABLE incidentes
ADD CONSTRAINT FK_id_usuario
FOREIGN KEY(id_usuario)
REFERENCES usuarios(id);

ALTER TABLE incidentes
ADD CONSTRAINT FK_id_lugar
FOREIGN KEY(id_lugar)
REFERENCES lugares(id);

ALTER TABLE incidentes
ADD CONSTRAINT FK_id_tipo_incidente
FOREIGN KEY(id_tipo_incidente)
REFERENCES tipos_incidentes(id);

ALTER TABLE usuarios
ADD CONSTRAINT email
UNIQUE (email);
-- INSERTIONS

INSERT INTO lugares(nombre) VALUES
('Centro turistico'),
('Laboratorios'),
('Restaurante'),
('Centro operativo'),
('Triceratops'),
('Dilofosaurios'),
('Velociraptors'),
('TRex'),
('Planicie de los herbívoros');

INSERT INTO tipos_incidentes(nombre) VALUES
('Falla electrica'),
('Fuga de herbivoro'),
('Fuga de Velociraptors'),
('Fuga de TRex'),
('Robo de ADN'),
('Auto descompuesto'),
('Visitantes en zona no autorizada');

INSERT INTO usuarios("role") VALUES
('PUBLICO');

INSERT INTO usuarios (email, "role", "password") VALUES
('admin@jurassic.com','ADMIN','jurassic');