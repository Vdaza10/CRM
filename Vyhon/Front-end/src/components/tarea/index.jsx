import React, { useState } from "react";
import {  Container, Caja1,Parrafo , Caja2, Boton , IconContainer, SelectParrafo, /* SelectOpciones */} from "./styled";
import imagen from "../img/tarea.jpg"
import { FaUserAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillCalendar2CheckFill, BsFillClipboard2CheckFill } from "react-icons/bs";
import Menu from "../menu/principal";
import CrearTarea from "../CreacionTarea";


function Retorno5() {


    const [desplegable, setDesplegable] = useState(true);
    const opcionTareaDesplegable = () => {
        setDesplegable(!desplegable);
    };

    const [selectOpciones, setSelectOpciones] = useState(false);
    const mostrarOpciones = () => {
        setSelectOpciones(!selectOpciones)
    }
    
    const [active, setActive] = useState(false);



    return (
        <> 
        <Menu/>
                <Container>
                    <Caja1>
                        <IconContainer style={{width:"10%"}}>
                            <FaUserAlt style={{marginLeft:"10px"}}/>
                            <SelectParrafo onClick={opcionTareaDesplegable} isOpen={desplegable}>Mis tareas</SelectParrafo>
                            <IoIosArrowDown style={{marginRight:"10px",width:"12px"}} onClick={mostrarOpciones}></IoIosArrowDown>
                            {/* <SelectOpciones isOpen= {desplegable}></SelectOpciones> */}
                        </IconContainer>
                        <IconContainer>
                            <BsFillCalendar2CheckFill style={{marginLeft:"10px"}}/>
                            <SelectParrafo onClick={opcionTareaDesplegable}>Seleccionar periodo</SelectParrafo>
                            <IoIosArrowDown style={{marginRight:"10px",width:"12px"}} onClick={mostrarOpciones}>hghtg</IoIosArrowDown>
                        </IconContainer>
                        <IconContainer>
                            <BsFillClipboard2CheckFill style={{marginLeft:"10px"}}/>
                            <SelectParrafo onClick={opcionTareaDesplegable} >Todo tipo de tareas</SelectParrafo>
                            <IoIosArrowDown style={{marginRight:"10px",width:"12px"}} onClick={mostrarOpciones}>hghtgh</IoIosArrowDown>
                        </IconContainer>
                    </Caja1>
                    <Caja2>
                    <img src={imagen} alt="img" style={{width:'40%',height:'40%' }} />
                    <Parrafo><h3>No hemos encontrado tareas en tu cuenta ni con los filtros <br/> que seleccionastes</h3></Parrafo>
                    <Parrafo>Crea tareas para no perder de vista las actividades y ganar mas tiempo para centrarte <br/> en lo que es más importante para tu empresa. o prueba a cambiar los filtros <br/>seleccionados para encontrar nuevos resultados.</Parrafo>
                    <Boton onClick={() => setActive(!active)}>Crear tarea</Boton>
                    {active && <CrearTarea></CrearTarea>}
                    </Caja2>
                </Container>

        </>
    );
}
export default Retorno5;