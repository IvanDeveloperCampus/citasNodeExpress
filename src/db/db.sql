CREATE TABLE tipo_documento(
tipdoc_id int PRIMARY KEY AUTO_INCREMENT,
tipdoc_nombre varchar(20) NOT NULL,
tipdoc_abreviatura varchar(20)
);

CREATE TABLE genero(
gen_id int PRIMARY KEY AUTO_INCREMENT,
gen_nombre varchar(20),
gen_abreviatura varchar(20)
);

CREATE TABLE acudiente(
acu_codigo int PRIMARY KEY,
acu_nombreCompleto varchar(100),
acu_telefono varchar(100),
acu_direccion varchar(200)
);

CREATE TABLE usuario(
usu_id int PRIMARY KEY AUTO_INCREMENT,
usu_nombre varchar(50),
usu_segundo_nombre varchar(50),
usu_primer_apellido_usuar varchar(50),
usu_segdo_apellido_usuar varchar(50),
usu_telefono varchar(50),
usu_direccion varchar(100),
usu_e-mail varchar(100),
usu_tipodoc INT,
usu_genero int,
usu_acudiente
FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
FOREIGN KEY (usu_genero) REFERENCES genero(gen_id),
FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo)
);

CREATE TABLE especialidad(
esp_id INT primary key auto_increment,
esp_nombre varchar(200)
);

CREATE TABLE consultorio(
cons_codigo int primary key auto_increment,
cons_nombre varchar(50)
);

CREATE TABLE medico(
med_nroMatriculaProfesional INT primary key,
med_nombreCompleto varchar(120),
med_consultorio int,
med_especialidad,
FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo),
FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
)

CREATE TABLE estado_cita(
estcita_id int primary key auto_increment,
estcita_nombre varchar(20)
);


CREATE TABLE cita(
cit_codigo INT PRIMARY KEY auto_increment,
cit_fecha date,
cit_estadoCita int,
cit_medico int,
cit_datosUsuario int,
FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id),
FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProfesional),
FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id)
);