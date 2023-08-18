import express from "express";

import router from './rutas/users.routes.js';
import router from "./rutas/contacto.routes.js";
import router from "./rutas/empresa.routes.js";
import router from "./rutas/negocio.routes.js";
import router from "./rutas/segmento.routes.js";
import router from "./rutas/tarea.routes.js";

const app = express();



app.use(express.json());

app.listen(3005, () => {
    console.log('Servidor corriendo en puerto 3005')
})


app.use(router)