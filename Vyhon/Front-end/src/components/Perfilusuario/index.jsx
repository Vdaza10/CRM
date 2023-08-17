import React from "react";
import { Fondo,Header,Titulo,Sutitulo, Main,ContenedorPerfil, InformacionActivacion, ImagenPerfil, Fecha, ContenedorRegistro,Registro, DatosUsuario, Informacion,Nombre, Editar } from "./styled";
import IPerfil from "../img/perfil.jpg";
import Menu from "../menu/principal";

function PerfilUsuario (){
    return (
        <>
            <Fondo>
            {/* header */}
            <Menu/>
            <Header>
                <Titulo>Editar perfil
                <Sutitulo>Perfil</Sutitulo>
                </Titulo>
            </Header>
            {/* body */}
            <Main>
                {/* informacion */}
            <ContenedorPerfil>
                <InformacionActivacion>
                    <ImagenPerfil src= {IPerfil}></ImagenPerfil>
                    <ContenedorRegistro>
                    <Registro>
                        Registrado el:
                        <Fecha type="date">14/08/2023 08:33</Fecha>
                    </Registro>
                    <Registro>Actualizado por última vez el:
                    <Fecha type="date">09/08/2023 08:12</Fecha>
                    </Registro>
                    <hr></hr>
            </ContenedorRegistro>
                </InformacionActivacion>
                <DatosUsuario>
                <Informacion>
                    <Nombre>Nombre:</Nombre>
                    <Nombre>Email:</Nombre>
                    <Nombre>contraseña:</Nombre>
                </Informacion>
                <Informacion>
                <Nombre style={{textAlign:"right"}}>el nombre del usuario</Nombre>
                <Nombre style={{textAlign:"right"}}>correo con inicio sesion</Nombre>
                <Nombre style={{textAlign:"right"}}> ****** </Nombre>
                <Editar>Editar</Editar>
                </Informacion>
                
            </DatosUsuario>
            </ContenedorPerfil>
            </Main>
        </Fondo>
        </>


        )
}
export default PerfilUsuario;

