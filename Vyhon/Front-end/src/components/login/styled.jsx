import styled from "styled-components";

export const Fondo = styled.div`
    background: #0099ff20;
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
    /* align-items: center; */
    width: 20%;
    height: 50%;
`
export const Titulo = styled.h1`
    text-align: center;
    font-style: italic;
    color: black;
    font-size: 25px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
`;
export const Parrafo = styled.p` 
font-family:'Open Sans', sans-serif;
font-size: 16px;
color: #000000c1;
margin-left: 10%;
`
export const Input = styled.input`
    width: 80%;
    height: 8%;
    margin-left: 10%;
    border: none;
    background-color: #b7d2e448;
`
export const Olvidar = styled.a`
    /* text-decoration: none; */
    color: #0099ff99;
    /* font-family:'Open Sans', sans-serif; */
    font-size: 15px;
    margin-left: 15px;
`

export const Button = styled.button`
    background-color: #009dff;
    color: white;
    width: 60%;
    height: 100%;
    border: none;
    font-size: 17px; 
    cursor: pointer;
    &:hover  {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`

export const ContainerUltimo = styled.div`
    width: 100%;
    height: 30%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`