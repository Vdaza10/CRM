import React from "react";
import { Fondo,Contenedor,Titulo, Parrafo , ConteinerBonton , Boton1, Boton2 , Input} from "./styled";
import { Link } from "react-router-dom";
import VentanaModal2 from "../mensajeContraseña";
import { useState } from "react";


function Recuperar  () {

    const[estadoModal2, cambiarEstadoModal2] = useState(false)


    return(
        <Fondo>
            <Contenedor>
            <Titulo>Recuperar cuenta</Titulo>
            <Parrafo>Te solicitamos amablemente que proporciones tu dirección de correo electrónico con el fin de llevar a cabo la búsqueda de tu cuenta.</Parrafo>
            <Input placeholder="ingresar correo electronico" ></Input>
            <ConteinerBonton>
                <Boton1 onClick={() => cambiarEstadoModal2(!estadoModal2)}>Buscar</Boton1>
                <Link to={"/"} style={{width:"35%", height:"30%"}}><Boton2>Cancelar</Boton2></Link>
            </ConteinerBonton>
            </Contenedor>
            <VentanaModal2
            estado={estadoModal2}
            cambiarEstado = {cambiarEstadoModal2}>

            </VentanaModal2>
        </Fondo>
    )
}
export default Recuperar;