import { pool } from "../db.js";

export const getUsers = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT correo, contraseña FROM registro');
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
}


export const createUsers = async(req,res) =>{
    try {
        const  {nombreUsuario, nombreEmpresa, correo, contraseña} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO registro (nombreUsuario, nombreEmpresa, correo, contraseña) VALUES (?,?,?,?)',
            [nombreUsuario, nombreEmpresa, correo, contraseña])

        res.send({
            id:rows.insertId,
            nombreUsuario,
            nombreEmpresa,
            correo, 
            contraseña
        })
    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
}


export const updateUsers = async (req, res) => {
try {

} catch (error) {
    return res.send(404).json({
message: `The register can't been update`,
    });
}
};

export const deleteUsers = async (req, res) => {
try {
} catch (error) {
    return res.status(404).json({
    message: "Register in database was not delete",
    });
}
};
