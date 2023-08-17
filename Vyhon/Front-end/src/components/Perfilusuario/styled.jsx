import styled from "styled-components";

// fondo
export const Fondo = styled.div`
    background-color:#f2f2f2;
    width:100%;
    height:35%;

`
//Header y su contenido
export const Header = styled.header`
border: 1px solid black;
width: 1918px;
/* margin-top: 0%; */
`
export const Titulo = styled.h3`
    font-family:sans;
    font-weight: 100;
    margin-left: 15px;
`
export const Sutitulo = styled.h5`
    color: #d4d5d594;
    top:0;
    
`
//Contenedor del perfil
export const Main = styled.div `
    display: flex;
    justify-content: center;
    height: 78vh;
    background-color: #c8c7c74b;
`

export const ContenedorPerfil = styled.div`
    width: 30%;
    height: 70%;
    margin-top: 100px;
    border-radius: 4px solid black;
    display: flex;
    flex-direction: column;
    
background-color: #fff;
`
export const InformacionActivacion = styled.div`
    width: 100%;
    height: 25%;
    /* background-color:#0099ffac; */
    display: flex;
`;
//  contenedor imagen
export const ImagenPerfil = styled.img `
border-radius: 50%;
width: 65px;
height: 56px;
margin: 50px 35px 40px 20px;
`;
export const ContenedorRegistro=styled.div`
    width: 100%;
    height: auto;
`
export const Registro = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 14px;
`

export const Fecha = styled.p`
    text-decoration: none;
    color:#8b8787;
`;
export const DatosUsuario  = styled.div`
    width: 100%;
    height:80%;
    display:flex;
    justify-content : space-between;
`
export const Informacion = styled.div`
width: 45%;
height: 30%;
margin: 13px;
/* border: 1px solid; */
`
export const Nombre = styled.p`
    color: gray;
`
export const Editar = styled.button`
    background-color:#0099ffe2;
    width: 65%;
    height: 35px;
    border:0;
    border-radius: 4%;
    margin-left: 40%;

`;