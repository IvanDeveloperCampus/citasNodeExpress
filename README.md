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

   Metodo GET=> http://127.0.0.1:5001/medico/getMedicos