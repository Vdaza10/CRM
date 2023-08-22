import React, { useState } from "react";
import { Fondo,Contenedor,Titulo,Parrafo,Input, Button, Olvidar, Message } from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";

function Principal  () {
   
    
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState(null)

    const Login = (ev)=>{

                    ev.preventDefault();
                    setError(null);
                    if(email && password){
                    Axios.post("http://localhost:3005/login",{
                    correo : email,
                    contraseña :password
                    })
                    .then((response) => {
                        console.log(response.data);
                        if (response.data === "") {
                          alert("el usuario no existe");
                        } else {
                          window.location.href = "http://localhost:3000/menu";
                        //   history.push("/menu");
                        }
                      })
                      .catch((error) => {
                        console.error(error);
                        alert("Error en la solicitud");
                });
            }else{
                    (setError(`ingrese tanto el usuario como la contraseña`))
                }
            }
    return(
        <Fondo>
            <Contenedor>
                <Titulo>Login</Titulo>
                <Message>{error}</Message>
                
                <Parrafo>Correo: <br />

                <Input 
                type="email"
                onChange={e => setEmail(e.target.value)}
                name="email"
                placeholder="email">
                </Input>

                </Parrafo>
                <Parrafo>Contraseña:<br/>

                <Input 
                type="Password"
                // value={body.password}
                onChange={e => setPassword(e.target.value)}
                name="password">
                </Input>

                </Parrafo>
                <Olvidar href="https://www.google.com/?hl=es">Olvidaste tu contraseña?</Olvidar> <br />
                <Olvidar ><Link to={"/registrarse"} style={{color:"aqua"}}>Registrate</Link></Olvidar> <br />
                
                <Button type="submit" onClick={Login}>
                    {/* <Link to={"/menu"} style={{textDecoration:"none",color:"black"}}></Link> */}Iniciar sesión
                    </Button>
            </Contenedor>
        </Fondo>
    )
}
export default Principal;

