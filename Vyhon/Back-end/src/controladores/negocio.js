import { pool } from "../db.js";

export const getNegocio = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT nombreNegocio ,etapas ,fuente , empresa ,contacto  FROM negocio INNER JOIN contacto ON negocio.contacto = contacto.idContacto INNER JOIN empresa ON negocio.empresa = empresa.idEmpresa ');
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
}

export const createNegocio = async(req,res) =>{
    try {
        const  {nombreNegocio ,etapas ,fuente , empresa , contacto} = req.body;
        const [rows] = await pool.query(
            'INSERT INTO negocio( nombreNegocio, etapas, fuente, empresa ,contacto) VALUES (?,?,?,?,?)',
            [nombreNegocio, etapas, fuente, empresa , contacto])

        res.send({
            id:rows.insertId,
            nombreNegocio,
            etapas,
            fuente,
            empresa,
            contacto
        })
    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
}

export const updateNegocio = async (req, res) => {
    try {
    
    } catch (error) {
        return res.send(404).json({
    message: `The register can't been update`,
        });
    }
    };

    
    export const deleteNegocio = async (req, res) => {
    try {
    } catch (error) {
        return res.status(404).json({
        message: "Register in database was not delete",
        });
    }
    };