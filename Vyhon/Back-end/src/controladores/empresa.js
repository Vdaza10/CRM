import { pool } from "../db.js";


export const createEmpresa = async (req, res) =>{
    try {
        const {nombreEmpresa, url, descripcion} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO empresa (nombreEmpresa, url, descripcion) VALUES (?,?,?,?)"
            [nombreEmpresa, segmento, url, descripcion])

            res.send({
                id:rows.insertId,
                nombreEmpresa,
                segmento,
                url,
                descripcion
            })

    } catch (error) {
        return req.status(500).json({messege: "algo va mal"})
    }
};




