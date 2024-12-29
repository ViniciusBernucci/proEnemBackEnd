import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',        // Host do PostgreSQL
    user: 'postgres',         // Usuário do PostgreSQL
    port: 5432,               // Porta padrão do PostgreSQL
    password: '2168',         // Senha do usuário
    database: 'diarioDB',     // Nome do banco de dados
});

export default pool;
