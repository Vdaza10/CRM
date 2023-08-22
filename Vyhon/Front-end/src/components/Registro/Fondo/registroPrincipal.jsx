import React from "react";
import { Fondo, Fondo2,Fondo3, Idioma, Ingresar, Ladero, Ladero1,Img, Ladero2, Imagen1 } from "./styledRegistro";
import Registrarse from "../Input/Registro";
import Vyhon from"../img/vyhon.jpeg"

const Registro = () => {

    return(
        <Fondo>
            <Ladero>
                <Ladero1>
                    <Imagen1 src= {Vyhon} alt="" />
                    
                </Ladero1>

                <Ladero2>
                    <h2>crea tu cuenta en Vyhon CRM</h2>
                    <p>crea con nosotros tu cuenta, ten una nueva y buena manera de agilizar sus procesos, mejorar su rentabilidad y sobre todo mantenerse en contacto con los clientes . 
                        siempre de su lado. Vyhon
                    </p>
                </Ladero2>
                <Ladero2>
                    <Img src={Vyhon} alt="" />
                    <p>EL CRM DE VENTAS , MAS VISITADO DE TODO El MERCADO</p>
                </Ladero2>
            
            </Ladero>
            
            <Fondo2>
                <Fondo3>
                <Registrarse></Registrarse>
                </Fondo3>
            </Fondo2>
            <Idioma name="idioma"> 
            <option value="spañol">spañol</option>
            <option value="ingles">ingles</option>
            <option value="portugal">portugal</option>
            <option value="brasil">brasil</option>
            <option value="germany">germany</option>
            <option value="arabe">arabe</option>
            </Idioma>
            <Ingresar>ingresa a tu cuenta</Ingresar>
        </Fondo>
    )
}
export default Registro