
DROP DATABASE IF EXISTS jurassic;
CREATE DATABASE jurassic;
\c jurassic; --Te mueve a la base de datos


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

INSERT INTO lugares(nombre)
values('Centro turistico'),
values('Laboratorios'),
values('Restaurante'),
values('Centro operativo'),
values('Triceratops'),
values('Dilofosaurios'),
values('Velociraptors'),
values('TRex'),
values('Planicie de los herbívoros');

INSERT INTO tipos_incidentes(nombre)
values('Falla electrica'),
values('Fuga de herbivoro'),
values('Fuga de Velociraptors'),
values('Fuga de TRex'),
values('Robo de ADN'),
values('Auto descompuesto'),
values('Visitantes en zona no autorizada');

INSERT INTO usuarios("role")
values('PUBLICO');

INSERT INTO usuarios(email, "role", "password")
values('admin@jurassic.com','ADMIN','jurassic');