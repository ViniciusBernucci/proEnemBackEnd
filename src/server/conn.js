import pkg from 'pg';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,        // Host do PostgreSQL
    user: process.env.DB_USER,        // Usuário do PostgreSQL
    port: process.env.DB_PORT,        // Porta padrão do PostgreSQL
    password: process.env.DB_PASSWORD, // Senha do usuário
    database: process.env.DB_NAME,    // Nome do banco de dados
});

export default pool;
