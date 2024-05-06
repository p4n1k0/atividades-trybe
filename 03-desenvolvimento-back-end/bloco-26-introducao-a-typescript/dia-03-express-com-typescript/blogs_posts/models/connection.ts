import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // Ref: https://github.com/tryber/praticando-typescript-express/blob/main/atividade-2/src/models/connection.ts
    dateStrings: true
});
