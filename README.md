## CITAS MEDICAS

### 1.  Archivo .env en la raiz del proyecto

Crear el archivo .env en la raiz del proyecto tome como guia el .envexample

### 2. Dependencias utilizadas en el proyecto

- Nodemon 
- dotenv		
- express
- mysql2

### 3. Instalación Dependencias

​	npm i

### 4. Para ejecutar el proyecto

​	npm run dev

### 5. EndPoints

1. Obtener todos los pacientes alfabéticamente 

   ##### Metodo GET=> http://127.0.0.1:5001/usuario/getUsuarios

2. Obtener todas las citas 

   ##### Metodo GET=> http://127.0.0.1:5001/cita/getCitas

3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):

   Metodo GET=> http://127.0.0.1:5001/medico/getMedicos/?especialidad=Cardiologia

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):

   http://127.0.0.1:5001/cita/proximaCita

   dato de entrada:

   {

   fecha:"2023-07-12"

   }

5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)

   Metodo GET=> http://127.0.0.1:5001/usuario/usuariosMedicoEspecifico/465899584

6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

   Metodo GET => http://127.0.0.1:5001/consultorio/consultorioUsuarioEspecifico/465899584

7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

   Metodo Get=>http://127.0.0.1:5001/cita/citasFechaEspecifica/?fecha="2023-07-12"

8. Obtener los médicos y sus consultorios

   Metodo GET => http://127.0.0.1:5001/medico/medicosAndConsultorios

9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

   Metodo get =>http://127.0.0.1:5001/cita/citasFechaMedicoEspecifico/?idMedico=465899584

   {

   fecha:"2023-07-12"

   }

   

   11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad

   Metodo GET => http://127.0.0.1:5001/cita/citasPorGenero?genero=fem

   13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.

       Metodo Get=> http://127.0.0.1:5001/cita/citasRechazadas

   

   