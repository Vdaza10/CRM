import React from "react";
import { Contenedor, ContenedorCampañas,Campañas,ContenedorCampañas1 } from "./styled";
import Menu from "../menu/principal";

const Campaña = () => {
    return(
        <>
        <Menu/>
        <Contenedor>
            <ContenedorCampañas>
                <Campañas>Comunicación</Campañas>
                <Campañas>Promoción</Campañas>
            </ContenedorCampañas>
            <ContenedorCampañas1>
                <Campañas>Campaña de correo</Campañas>
                <Campañas>campaña de SMS</Campañas>
                <Campañas>Pedidos</Campañas>
            </ContenedorCampañas1>
            <ContenedorCampañas>
                <Campañas>Llamada de audio</Campañas>
                <Campañas>Messengers</Campañas>
            </ContenedorCampañas>
        </Contenedor>
        
        </>
    )
}
export default Campaña