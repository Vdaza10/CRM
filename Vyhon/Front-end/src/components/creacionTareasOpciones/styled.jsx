import styled from "styled-components";

export const Div1 = styled.div`
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
height: 60%;
width: 15%;
border: solid gray 1px;
display: flex;
justify-content: center;
flex-direction: column;
`

export const Input = styled.input`
    height: 90%;
    width: 100%;
    font-size: 17px;
    border: none;
    margin-left: 5px;
`
export const ContainerInput= styled.div`
    height: 50%;
    width: 90%;
    border: solid 1px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`
export const Parrafo = styled.p`
font-size: 20px;
font-style: italic;
margin: 0%;
padding: 0%;
margin-top: 25px;
margin-left: 20px;
`;
export const Conteiner1 = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Conteiner2 = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
`
export const Checkbox = styled.input`
    width: 25px;
    height: 70%;
    margin-top: 5px;
    margin-left: 20px;
`
export const Caja = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    margin-top: 20px;
`
export const ParrafoCheckbox = styled.p`
font-size: 17px;
margin: 0;
padding: 0;
margin-top: 5px;
`
export const Boton1 = styled.button`
    background-color: #00A9FF;
    color: white;
    width: 30%;
    height: 50%;
    border: none;
    border-radius: 2px;
    margin-right: 20px;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color: #0cdd5ff5;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Boton2 = styled.button`
    background-color: white;
    color: #00A9FF;
    width: 30%;
    height: 50%;
    border: solid 1px gray;
    border-radius: 2px;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color: #0cdd5ff5;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Hr = styled.hr`
    width: 100%;
    border: solid gray 1px;
`