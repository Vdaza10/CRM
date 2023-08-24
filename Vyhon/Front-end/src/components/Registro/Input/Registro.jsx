import React from "react";
import { Contenedor, Input, Boton, Seleccionar, Contenedor1, Checkbox, Titulo,  TextoImput, TextoCheckbox, ContaienrBoton } from "./styled";
import { useState } from "react";
import Axios from "axios";
import validator from 'validator'

const Registrarse = () => {
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [empresa, setEmpresa] = useState("");
    const [email, setEmail] = useState("")

    const Validacion = (e) => {
        let emai = e.target.value;

        if (validator.isEmail(emai)) {

            setEmail(emai);
        }
        else {
            // setEmail('enter valid Email');
        }
    }

    const Registro = (ev) => {
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

    return (
        <Contenedor>
            <Titulo>
                <h2 style={{ marginLeft: "40%" }}>Crea tu cuenta</h2>
            </Titulo>



            <Contenedor1><TextoImput><h3 style={{ margin: "0" , fontWeight: "500"}}>¿ Cuál es tu nombre ?</h3></TextoImput>
                <Input
                placeholder="Ingrese su  nombre"
                onChange={(event) => {
                    setNombre(event.target.value)
                }}
                type="text" required></Input>
            </Contenedor1>

            <Contenedor1><TextoImput><h3 style={{ margin: "0", fontWeight: "500" }}>¿ Para que empresa trabajas  ?</h3></TextoImput>
                <Input
                placeholder="Ingresar nombre de la empresa "
                    onChange={(event) => {
                        setEmpresa(event.target.value)
                    }}
                    type="text" required>
                </Input></Contenedor1>


            <Contenedor1>
                <TextoImput><h3 style={{ margin: "0", fontWeight: "500" }}>¿ Cuál es tu correo electrónico ?</h3></TextoImput>
                <Input
                    placeholder="Ingrese su correo electronico"
                    onChange={(e) => Validacion(e)}
                    type="email"
                    // placeholder ="ejemplo@kmas.com"
                    required>
                </Input>
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{email}</span>
            </Contenedor1>

            <Contenedor1><TextoImput><h3 style={{ margin: "0" , fontWeight: "500" }}>Crea una contraseña para tu cuenta </h3></TextoImput>
                <Input
                placeholder="Ingrese su contraseña"
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    type="password" required></Input></Contenedor1>




         




            <Checkbox>
                <Seleccionar type="checkbox"></Seleccionar>
                <TextoCheckbox>Estoy deacuerdo con los terminos de uso del software y conozco <br /> la polica  de privacidad </TextoCheckbox>
            </Checkbox>

            <ContaienrBoton>
                <Boton
                    onClick={Registro}>crear cuenta
                </Boton>
            </ContaienrBoton>
        </Contenedor>

    )
}


export default Registrarse