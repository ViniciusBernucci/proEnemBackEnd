import express from 'express';
import modulos from "./routes/ModulosRoute.js"
import calculos from "./routes/CalculosRoute.js"

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rotas
app.use(modulos)
app.use(calculos)



app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor iniciado em: " + data);

})

export default app;