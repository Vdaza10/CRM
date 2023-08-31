import React from "react";
import { useState, useEffect } from "react";
import { Container,Principal,Caja1,Parrafo,Img,Caja2,Parrafo1,Input,Select ,Caja3,Boton1,Boton2} from "./styled.jsx";
import imagen from "../img/img_x.webp"
import Axios from "axios";

function CrearNegocios() {

    const [cerrar, setCerrar] = useState(true);
    const [nombreNegocio, setNombreNegocio] = useState("");
    const [etapas, setEtapas] = useState("");
    const [fuente, setFuente] = useState("");
    const [selectedEmpresa, setSelectedEmpresa] = useState("");
    const [selectedContacto, setSelectedContacto] = useState("");
    const [empresa, setEmpresa] = useState([]);
    const [contacto, setContacto] = useState([]);

    const fetchEmpresa = async () => {
        try {
            const response = await Axios.get("http://localhost:3005/company");
            setEmpresa(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("error al obtener empresas:", error);
        }
    };

    const fetchContacto = async () => {
        try {
            const response = await Axios.get("http://localhost:3005/contacto");
            setContacto(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("error al obtener contactos:", error);
        }
    };

    useEffect(() => {
        fetchEmpresa();
        fetchContacto();
    }, []);

    const cerrarcomponente = () => {
        setCerrar(false);
    };

    if (!cerrar){
        return null 
    };

    const createNegocio = async (ev) => {
        ev.preventDefault();
        try {
            const response = await Axios.post("http://localhost:3005/negocio", {
                nombreNegocio,
                etapas,
                fuente,
                empresa: selectedEmpresa,
                contacto: selectedContacto,
            });
            console.log("negocio creado", response.data);
        } catch (error) {
            console.log("error al crear negocio:", error);
        }
    };

    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Crear negocio</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick= {cerrarcomponente} ></Img>
                    </Caja1>
                    <hr />


                    <Caja2>
                        <Parrafo1><h3>Nombre del negocio</h3></Parrafo1>
                        <Input placeholder="Ingresar el nombre del negocio" onChange={(e) => setNombreNegocio(e.target.value)}/>


                        <Parrafo1><h3>Etapa del embudo</h3></Parrafo1>
                        <Input placeholder="Ingresar el medio de información" onChange={(e) => setEtapas(e.target.value)}/>


                        <Parrafo1><h3>Fuente</h3></Parrafo1>
                        <Input placeholder="Ingresar el medio por el cual creara su negocio" onChange={e => setFuente(e.target.value)}/>


                        <Parrafo1><h3>Campaña</h3></Parrafo1>
                        <Select
                            value={selectedEmpresa}
                            onChange={(e) => setSelectedEmpresa(e.target.value)}>
                            <option value="">seleccionar</option>
                            {empresa.map((empresa) => (
                                <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                                    {empresa.nombreEmpresa}
                                </option>
                            ))}
                        </Select>


                        <Parrafo1 style={{color:'gray' , marginTog:'%8'}}></Parrafo1>
                        <Parrafo1><h3>Contacto</h3></Parrafo1>
                        <Select
                            type="text"
                            value={selectedContacto}
                            onChange={(e) => setSelectedContacto(e.target.value)}>
                            <option value="">seleccionar</option>
                            {contacto.map((contacto) => (
                                <option key={contacto.idContacto} value={contacto.idContacto}>
                                    {contacto.nombreContacto}
                                </option>
                            ))}
                        </Select>
                    </Caja2>

                        <hr />
                    <Caja3>
                        <Boton1 onClick={createNegocio}>Crear negocio</Boton1>
                        <Boton2>Cancelar</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
};

export default CrearNegocios;
