import React,{useState, useEffect} from "react";
import { Container,Principal,Caja1,Parrafo,Img,Caja2,Parrafo1,Input,Caja3,Boton1,Boton2,ContainerInput, Select} from "./styled.jsx";
import imagen from "../img/img_x.webp"
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Axios from "axios";
import { response } from "express";


    
const CrearTarea = ()=> {
    const [cerrar, setCerrar] = useState(true);
    const [selectNegocio, setSelectNegocio] = useState("")
    const [negocio, setNegocio] = useState([])
    const [asunto, setAsunto] = useState("")
    const [responsable,setResponsable]=useState("");
    const [tipotarea, setTipotarea] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("");

    const fetchNegocio = async () => {
        try {
            setNegocio(response.data)
            console.log(response.data);
        } catch (error) {
            console.error("error al obtener negocio:", error);
        }
    };

    useEffect(() => {
        fetchNegocio();
    }, []);

    const cerrarcomponente = () => {
        setCerrar(false);
    }
    if (!cerrar){
        return null 
    }

    const createTarea = async (ev) => {
        ev.preventDefault();
        try {
            const response = await Axios.post("http://localhost:3005/tareas", {
                selectNegocio,
                asunto,
                responsable,
                tipotarea,
                fecha,
                hora
            });
            console.log("tarea creada:", response.data);
        } catch (error) {
            console.error("error al crear tarea:", error);
        }
    };


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
                        <Select value={selectNegocio} onChange={(e) =>{setSelectNegocio(e.target.value)}}>
                            {negocio.map(negocio => (
                                <option key={negocio.idNegocio} value={negocio.idNegocio}>
                                {negocio.nombreNegocio}
                                </option>))}
                        </Select>


                        <Parrafo1><h3>Asunto de la tarea</h3></Parrafo1>
                        <Input placeholder="ingresar asunto de tarea" 
                        onChange={(e) => {setAsunto(e.target.value)}}/>


                        <Parrafo1><h3>Responsable</h3></Parrafo1>
                        <ContainerInput onChange={(e) => {setResponsable(e.target.value)}}/>
                        <FaUser style={{marginRight:"5px"}}/>


                        <Parrafo1><h3>Tipo de tarea</h3></Parrafo1>
                        <ContainerInput>
                        <Input onChange={(e) => {setTipotarea(e.target.value)}}/>
                        <BsFillCalendar2CheckFill style={{marginRight:"5px"}}/>
                        </ContainerInput>


                        <Parrafo1><h3>Fecha</h3></Parrafo1>
                        <Input type="date" style={{color:'gray'}} onChange={(event) =>{setFecha(event.target.value)}}/>

                        <Parrafo1><h3>Horario de la tarea</h3></Parrafo1>
                        <Input type="time" style={{color:'gray'}} onChange={(event) =>{setHora(event.target.value)}}/>
                    </Caja2>


                        <hr />
                    <Caja3>
                        <Boton1 onClick={createTarea} >Crear tarea</Boton1>
                        <Boton2>Cancelar</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
}

export default CrearTarea;