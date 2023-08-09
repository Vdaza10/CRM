import { Router } from "express";
import * as userCrtl from "../controladores/user.controllers.js";

const router = Router();

router.get('/users', userCrtl.getUsers);

router.post('/users', userCrtl.createUsers);

router.patch('/users', userCrtl.updateUsers);

router.delete('/users', userCrtl.deleteUsers);

export default router