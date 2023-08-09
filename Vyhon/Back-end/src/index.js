import express from "express";

import router from './rutas/users.routes.js';


const app = express();



app.use(express.json());

app.listen(3005, () => {
    console.log('Servidor corriendo en puerto 3005')
})


app.use(router)