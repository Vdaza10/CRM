import React from 'react';
import { Container , ContenedorModal , Contenido , ContainerBoton } from './styled';
// import { GrClose } from "react-icons/gr";
import { FcOk } from "react-icons/fc";
import { Link } from 'react-router-dom';


const VentanaModal1 = ({estado,cambiarEstado}) => {
  return (
    <>
      {estado && 
        <Container>
            <ContenedorModal>
                <Contenido>
                    <h1 style={{fontSize:"90px"}}><FcOk></FcOk></h1>
                    <p>¡Saludos! Queremos extenderte una cálida bienvenida a nuestra página Vyhon. Estamos encantados de tenerte como parte de nuestra comunidad.</p>
                </Contenido>
                <ContainerBoton>
                  <button><Link to={"/"} style={{color:"white",textDecoration:"none"}}>OK</Link></button>
                </ContainerBoton>
            </ContenedorModal>
        </Container>
        }
    </>
  );
};

export default VentanaModal1;