import React, { useState } from "react";
import { Fondo,Contenedor,Titulo,Parrafo,Input, Button, Olvidar , ContainerUltimo } from "./styled";
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
                <Titulo>¡Bienvenidos a VYHON!</Titulo>
                <Parrafo>
                    <h4 style={{margin:"0"}}>Email</h4>
                </Parrafo>

                <Input 
                type="email"
                value={body.email}
                onChange={inputChange}
                name="email">
                </Input>

                
                <Parrafo>
                    <h4 style={{margin:"0"}}>Contraseña</h4>
                </Parrafo>
                

                <Input 
                type="Password"
                value={body.password}
                onChange={inputChange}
                name="password">
                </Input>

                
                <ContainerUltimo>
                <Link to={"/menu"} style={{width:"100%",height:"30%", display:"flex", textDecoration:"none", justifyContent:"center"}}><Button type="submit" onClick={ingresaUsuario}>Iniciar sesión</Button></Link>
                <br />
                <Olvidar href="https://www.google.com/?hl=es" style={{margin:"0"}}><h4 style={{margin:"0"}}>Olvidaste tu contraseña?</h4></Olvidar> 
                <br />
                <Olvidar onClick={registroUsuario} ><Link to={"/registrarse"} style={{color:"#101010da"}}><h4 style={{margin:"0"}}>Registrate</h4></Link></Olvidar>
                </ContainerUltimo>
            </Contenedor>
        </Fondo>
    )
}
export default Principal;

