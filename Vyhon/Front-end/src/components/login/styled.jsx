import styled from "styled-components";

export const Fondo = styled.div`
    background: #d1d1d1;
    height: 100vh;
    width: 100%;
    display: flex;
   align-items: center;
   justify-content:center ;
`;

export const Contenedor = styled.div`
    border-radius: 4px solid;
    background-color: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 50%;
`
export const Titulo = styled.h2`
    text-align: center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
`;
export const Parrafo = styled.p` 
font-family:'Open Sans', sans-serif;

`
export const Input = styled.input`
    width: 230px;
    height: 30px;
`
export const Olvidar = styled.a`
    /* text-decoration: none; */
    color:aqua;
`

export const Button = styled.button`
    background-color:aqua;
    border:0;
    width: 100px;
    height: 30px;
    cursor: pointer;
`