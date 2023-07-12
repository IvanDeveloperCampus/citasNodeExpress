import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();


const pool = mysql.createPool({
    host: process.env.HOSTNAME,
    user: process.env.NAME_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
  const getConnection = async () => {
    try {
      const connection = await pool.getConnection();
      return connection;
    } catch (error) {
      console.error('Error al obtener la conexión del pool:', error);
    }
  };
  
  
  
  export default getConnection;