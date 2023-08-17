import React, { useState } from "react";
import { Div1, Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input, Parrafo2, Caja2, Boton1, Boton2 , ContactoSelect } from "./styled";
import imagen from "../img/img_x.webp"

function Retorno4() {
    // Estado para controlar si el componente está cerrado o abierto
    const [cerrar, setCerrar] = useState(true);

    //funcion para cerrar el componente
    const cerrarcomponente = () => {
        setCerrar(false);
    }

    // Si el estado 'cerrar' es falso, devuelve null para ocultar el componente
    if (!cerrar){
        return null 
    }
    return (
        <Div1 >
            {/* Contenedor principal */}
            <Container1>
                {/* Primera sección */}
                <Caja>
                    <Parrafo><h3>Crear contacto</h3></Parrafo>
                     {/* Imagen para cerrar el componente */}
                    <Img src={imagen} alt="img"  onClick= {cerrarcomponente}/>
                </Caja>
                <hr />
                {/* Segunda sección */}
                <Caja1>
                    <Parrafo1><h3>Nombre</h3></Parrafo1>
                    <Input placeholder="Ingresar el nombre del contacto" ></Input>
                    <Parrafo1><h3> Cargo</h3></Parrafo1>
                    <Input placeholder="Ingresa el contacto del contacto" ></Input>
                    <Parrafo1><h3>Telefono</h3></Parrafo1>
                    <Input placeholder="Ingresar el telefono del contacto" ></Input>
                    <Parrafo1><h3>Email</h3></Parrafo1>
                    <Input placeholder="Ingresar el email del contacto" ></Input>
                    <Parrafo1><h3>Empresa del contacto </h3></Parrafo1>
                    <ContactoSelect></ContactoSelect>
                    <Parrafo2><h3>INFORMACION ADICIONAL</h3></Parrafo2>
                </Caja1>
                <hr />
                 {/* Tercera sección */}
                <Caja2>
                    {/* Botones para cancelar o crear el contacto */}
                    <Boton2>Cancelar</Boton2>
                    <Boton1>Crear contacto</Boton1>
                </Caja2>
            </Container1>
        </Div1>

    );
}
export default Retorno4;