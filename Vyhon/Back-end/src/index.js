import express from "express";
import router from "./rutas/totals.routes.js";


const app = express();


//ruta index//
app.use(router)


app.use(express.json());

app.listen(3005, () => {
    console.log('Servidor corriendo en puerto 3005')
})


