import dotenv from 'dotenv';
dotenv.config(); // Isso deve ser a primeira coisa no código

//console.log("Usuário do banco:", process.env.DB_USER); // Teste se está carregando

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,        // Host do PostgreSQL
    user: process.env.DB_USER,        // Usuário do PostgreSQL
    port: process.env.DB_PORT,        // Porta padrão do PostgreSQL
    password: process.env.DB_PASSWORD, // Senha do usuário
    database: process.env.DB_NAME,    // Nome do banco de dados
});

export default pool;
