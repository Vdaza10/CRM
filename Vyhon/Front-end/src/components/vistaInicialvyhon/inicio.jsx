import React from "react";
import { ContainerTarjetas, Contenedor1, ContenedorImagen, ContenedorInicial, Informacion, Logo, Menucontainer, Opciones, TarjetasInformativas } from "./styled";
import imagen from "../img/logito.svg"
// import imagen1 from "../img/pruebainicio.avif"
import inicio from "../img/crminicio.jpg"
import herramientas from "../img/herramientas.png"


const Inicio = () => {
    return(
        <>
    <ContenedorInicial>
        <Contenedor1>
            <Logo src={imagen}></Logo>
            

        </Contenedor1>
        <Menucontainer>
            <Opciones>Crear su cuenta</Opciones>
            <Opciones>Iniciar sesion</Opciones>

        </Menucontainer>
        </ContenedorInicial>
        <Informacion style={{backgroundImage:`url(${inicio})` , backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
            <ContainerTarjetas>
            <TarjetasInformativas>Vista grafica</TarjetasInformativas>
            <TarjetasInformativas>Seguridad</TarjetasInformativas>
            <TarjetasInformativas>Heramientas<ContenedorImagen style={{backgroundImage: `url(${herramientas})` ,backgroundRepeat: "no-repeat", backgroundSize:"cover"}}></ContenedorImagen></TarjetasInformativas>
            
            </ContainerTarjetas>
            </Informacion> 
    
        </>
    );
}
export default Inicio
