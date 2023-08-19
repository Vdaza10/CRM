import { Router } from "express";
import * as userCrtl from "../controladores/user.controllers.js";//registro//
import * as empresaCrtl from "../controladores/empresa.js";//empresa//
import * as contactoCrtl from "../controladores/contacto.js"; //contacto//
import * as negocioCrtl from "../controladores/negocio.js"; //negocio//
import * as segmentoCrtl from "../controladores/segmento.js"; //segmento//
import * as tareaCrtl from "../controladores/tarea.js"; //tareas// */



//registro
const router = Router();

router.get('/users', userCrtl.getUsers);

router.post('/users', userCrtl.createUsers);

router.patch('/users', userCrtl.updateUsers);

router.delete('/users', userCrtl.deleteUsers);


//empresa//


//contacto//


//negocio//


//segmento//


//tareas//



export default router