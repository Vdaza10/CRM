import React,{useState} from "react";
import { Container,Principal,Caja1,Parrafo,Img,Caja2,Parrafo1,Input,Caja3,Boton1,Boton2,ContainerInput,ContactoSelect} from "./styled.jsx";
import imagen from "../img/img_x.webp"
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


function CrearTarea() {
    
    const [cerrar, setCerrar] = useState(true);
    const cerrarcomponente = () => {
        setCerrar(false);
    }
    if (!cerrar){
        return null 
    }
    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Crear tarea</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick= {cerrarcomponente}></Img>
                    </Caja1>
                    <hr />
                    <Caja2>
                        <Parrafo1><h3>Negocio</h3></Parrafo1>
                        <ContactoSelect></ContactoSelect>
                        <Parrafo1><h3>Asunto de la tarea</h3></Parrafo1>
                        <Input placeholder="ingresar asunto de tarea" ></Input>
                        <Parrafo1><h3>Responsable</h3></Parrafo1>
                        <ContainerInput>
                        <Input placeholder="Ingresar nombre del responsable" style={{color:'gray',height:"90%",width:"90%", border:"none"}} ></Input>
                        <FaUser style={{marginRight:"5px"}}/>
                        </ContainerInput>
                        <Parrafo1><h3>Tipo de tarea</h3></Parrafo1>
                        <ContainerInput>
                        <Input placeholder="Ingresar tipo de tarea" style={{color:'gray',height:"90%",width:"90%", border:"none"}} ></Input>
                        <BsFillCalendar2CheckFill style={{marginRight:"5px"}}/>
                        </ContainerInput>
                        <Parrafo1><h3>Fecha</h3></Parrafo1>
                        <Input type="date" style={{color:'gray'}} ></Input>
                        <Parrafo1><h3>Horario de la tarea</h3></Parrafo1>
                        <Input type="time" style={{color:'gray'}} ></Input>
                    </Caja2>
                        <hr />
                    <Caja3>
                        <Boton1>Crear negocio</Boton1>
                        <Boton2>Cancelar</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
} 

export default CrearTarea;