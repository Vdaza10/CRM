import { pool } from "../db.js";

// export const crearContacto = async (req, res) => {
//     try {
//         const { nombreContacto, cargo, telefono, correo, contactoEmpresa } = req.body;
//         const [rows] = await pool.query(
//             "INSERT INTO contacto (nombreContacto, cargo, telefono, correo, contactoEmpresa) VALUES (?,?,?,?,?)",
//             [nombreContacto, cargo, telefono, correo, contactoEmpresa]
//         );

//         res.send({
//             id: rows.insertId,
//             nombreContacto,
//             cargo,
//             telefono,
//             correo,
//             contactoEmpresa
//         });
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Algo anda mal" });
//     }
// };
