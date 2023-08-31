import React, { useState, useEffect } from "react";
import { Div1,  Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input,  Caja2, Boton1, Boton2 , Select } from "./styled";
import imagen from "../img/img_x.webp"
import Axios from "axios";


function Retorno4() {

    const [cerrar, setCerrar] = useState(true);
    const [nombreContacto, setNombreContacto] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [contactoEmpresa, setContactoEmpresa] = useState();
    const [empresas, setEmpresas] = useState([])

    const fetchEmpresas = async () => {
        try {
            const response = await Axios.get("http://localhost:3005/company");
            setEmpresas(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error al obtener empresas:", error);
        }
    };

    useEffect(() => {
        fetchEmpresas();
    }, []);

    const cerrarcomponente = () => {
        setCerrar(false);
    }
    if (!cerrar){
        return null 
    };

    const createContacto = async (ev) => {
        ev.preventDefault();
        try {
            const response = await Axios.post("http://localhost:3005/contacto", {
                nombreContacto,
                cargo,
                telefono,
                correo,
                contactoEmpresa
            });
            console.log("Contacto creado:", response.data);
        } catch (error) {
            console.error("Error al crear el contacto:", error);
        }
    };


    return (
        <Div1 >

            <Container1>

                <Caja>
                    <Parrafo><h3>Crear contacto</h3></Parrafo>

                    <Img src={imagen} alt="img"  onClick= {cerrarcomponente}/>
                </Caja>
                <hr />

                <Caja1>
                    <Parrafo1><h3>Nombre</h3></Parrafo1>
                    <Input placeholder="Ingresar el nombre del contacto" onChange={e => setNombreContacto(e.target.value)}/>


                    <Parrafo1><h3> Cargo</h3></Parrafo1>
                    <Input placeholder="Ingresa el contacto del contacto" onChange={e => setCargo(e.target.value)}/>


                    <Parrafo1><h3>Telefono</h3></Parrafo1>
                    <Input placeholder="Ingresar el telefono del contacto" onChange={e => setTelefono(e.target.value)}/>


                    <Parrafo1><h3>Email</h3></Parrafo1>
                    <Input placeholder="Ingresar el email del contacto" onChange={e => setCorreo(e.target.value)}/>


                    <Parrafo1><h3>Empresa del contacto </h3></Parrafo1>
                    <Select value={contactoEmpresa} onChange={e => setContactoEmpresa(e.target.value)}>
                    {empresas.map(empresa => (
                        <option key={empresa.idEpresa} value={empresa.idEpresa}>
                        {empresa.nombreContacto}
                        </option>))};
                    </Select>
                </Caja1>

                <hr />
                <Caja2>

                    <Boton2>Cancelar</Boton2>
                    <Boton1 onClick={createContacto}>Crear contacto</Boton1>
                </Caja2>
            </Container1>
        </Div1>

    );
}
export default Retorno4;