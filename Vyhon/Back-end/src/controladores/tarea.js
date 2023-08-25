import { pool } from "../db.js";

export const getTareas = async(req,res) =>{
    try{
        const [rows] = await pool.query ('SELECT * FROM tarea');
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({message:'algo sale mal en tarea'})
    }
}
export const createTarea = async(req,res) =>{
    try {
        const  {negocio, asunto, responsable, tipoTarea, fecha, hora} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO tarea (negocio, asunto, responsable, tipoTarea, fecha, hora) VALUES (?,?,?,?,?,?)',
            [nombreUsuario, nombreEmpresa, correo, contraseña])

        res.send({
            id:rows.insertId,
            negocio, 
            asunto, 
            responsable, 
            tipoTarea,
            fecha, 
            hora
        })
    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
}

export const updateTarea= async (req, res) => {
    try {
    
    } catch (error) {
        return res.send(404).json({
    message: `The register can't been update`,
        });
    }
    };
    

    export const deleteTarea = async (req, res) => {
    try {
    } catch (error) {
        return res.status(404).json({
        message: "Register in database was not delete",
        });
    }
    };
    

