import styled from "styled-components";

export const Contenedor = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
`
export const Titulo = styled.div`
    width: 100%;
    height: 10%;
    color: black;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Contenedor1 = styled.div`
    /* background-color: #3eee61; */
    margin-top: 10px;
    width:50% ;
    height: 10%;
`
export const Input = styled.input`
    border-radius: 2px;
    width: 80%;
    height: 45%;
    border: solid 2px black;
    margin-top: 8px;
    font-size: 16px;
`


export const Boton = styled.button`
    background-color: #020107 ;
    color: white;
    border: none;
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;

    :hover{
        background-color: #3aa8ec;
        color: gray;
    } 
`
export const Checkbox = styled.div`
    width: 50%;
    height: 5%;
    margin-top: 20px;
    display: flex;
    align-items: center;
`

export const TextoCheckbox = styled.p`
    font-size: 12px;
    font-style: italic;
`

export const Seleccionar = styled.input`
    cursor: pointer;
    width: 20px;
    height: 20px;
`
export const TextoImput = styled.p`
    font-size: 15px;
    font-style: italic;
    margin: 0;
    color: #0000009c;
`

export const ContaienrBoton = styled.div`
    width: 40%;
    height: 10%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    margin-right: 9%;
`