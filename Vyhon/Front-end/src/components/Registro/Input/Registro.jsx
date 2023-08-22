import React from "react";
import { Contenedor, Input, Boton,Seleccionar, Contenedor1, Subtitulo, Checkbox,  CuadritoSelecionar, Titulo,ContenedorLetraSeleccionar } from "./styled";
import { useState } from "react";
import Axios from "axios";
import validator from 'validator'

const  Registrarse = () => {
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [empresa,setEmpresa]=useState("");
    const [email, setEmail] = useState("")

    const Validacion = (e)=>{
        let emai = e.target.value;

        if(validator.isEmail(emai)){
            
            setEmail(emai);
        }
        else{
            // setEmail('enter valid Email');
    }
    }

    const Registro = (ev)=>{
        ev.preventDefault()
        if(email && password && nombre && empresa){
        Axios.post("http://localhost:3005/users",{
        correo : email,
        contraseña :password,
        nombreUsuario :nombre,
        nombreEmpresa :empresa
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        
        })}else{
            alert('ingrese todos los valores')
        };
    }

    return(
        <Contenedor>
        <Titulo>
            <h2> CREA TU CUENTA</h2>
        </Titulo>

            <Contenedor1>
                <Subtitulo>¿cual es tu correo?</Subtitulo>
                <Input
                onChange={(e) => Validacion(e)}
                type = "email"
                // placeholder ="ejemplo@kmas.com"
                required>
                </Input><br />
                <span style={{
            fontWeight: 'bold',
            color: 'red',
        }}>{email}</span>
            </Contenedor1>


            <Contenedor1>
                <Subtitulo>¿cual es tu nombre?</Subtitulo>
            <Input
            onChange={(event) =>{
                setNombre(event.target.value)
            }}
            type="text"required></Input>
            </Contenedor1>


            <Contenedor1>
                <Subtitulo style={{marginLeft:'20px'}}> ¿para que empresa trabaja?</Subtitulo>
            <Input
            onChange={(event) =>{
                setEmpresa(event.target.value)
            }}
            type="text"required>  
            </Input>
            </Contenedor1>


            <Contenedor1>
                <Subtitulo>crea una contraseña</Subtitulo>
            <Input
            onChange={(event) =>{
                setPassword(event.target.value)
            }}
            type="password" required></Input>
            </Contenedor1>

            <Checkbox>
                <CuadritoSelecionar>
            <Seleccionar type="checkbox"></Seleccionar>
        
            </CuadritoSelecionar>

            <ContenedorLetraSeleccionar>
            estoy de acuerdo con los terminos de uso del software, conozco su publicidad
            </ContenedorLetraSeleccionar>
            </Checkbox>

            <div>
                <Boton 
            onClick={Registro}>crear cuenta
                </Boton>
            </div>
        </Contenedor>
        
    )
}


export default Registrarse