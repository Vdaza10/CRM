import React, { useState } from "react";
import { Fondo,Contenedor,Titulo,Parrafo,Input, Button, Olvidar } from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";

function Principal  () {
    const[ingresar, setIngresar] = useState("")
    const ingresaUsuario = () => {
        setIngresar(!ingresar);
    }

    const [registrate, setRegistrate] = useState("")
    const registroUsuario = () => {
        setRegistrate(!registrate);
    }

const [body, setBody] = useState({email: "", password: ""});
    const inputChange=({target}) =>{
        const {email, value} = target
        setBody({
            ...body,
            [email]: value
        })
    }
    const validacion = (e) =>{
        e.preventDefault()
        Axios.post("http://localhost/users",body)
        .then(({data})=>{
            
        })
    }
    return(
        <Fondo>
            <Contenedor>
                <Titulo>Login</Titulo>
                <Parrafo>Correo: <br />

                <Input 
                type="email"
                value={body.email}
                onChange={inputChange}
                name="email">
                </Input>

                </Parrafo>
                <Parrafo>Contraseña:<br/>

                <Input 
                type="Password"
                value={body.password}
                onChange={inputChange}
                name="password">
                </Input>

                </Parrafo>
                <Olvidar href="https://www.google.com/?hl=es">Olvidaste tu contraseña?</Olvidar> <br />
                <Olvidar onClick={registroUsuario} ><Link to={"/registrarse"} style={{color:"aqua"}}>Registrate</Link></Olvidar> <br />
                
                <Button type="submit" onClick={ingresaUsuario}><Link to={"/menu"} style={{textDecoration:"none",color:"black"}}>Iniciar sesión</Link></Button>
            </Contenedor>
        </Fondo>
    )
}
export default Principal;

