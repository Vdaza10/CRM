import React,{useState, useEffect} from "react";
import { Div1 , Container1 , Caja , Parrafo, Img , Parrafo1 , Caja1 , Input , Caja2 , Boton1 ,Boton2 , Area, SelectEmpresa } from "./styled.jsx";
import imagen from "../img/img_x.webp"
import Axios from "axios";

function Retorno8() {


    const [cerrar, setCerrar] = useState(true);
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [selectedSegmento, setSelectedSegmento] = useState("");
    const [url, setUrl] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [segmento, setSegmento] = useState([]);


    const fetchSegmentos = async () => {
        try {
            const response = await Axios.get("http://localhost:3005/segmento");
            setSegmento(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al obtener segmentos:", error);
        }
    };

    useEffect(() => {
        fetchSegmentos();
    }, []);

    const cerrarcomponente = () => {
        setCerrar(false);
    };
    if (!cerrar){
        return null 
    };

    const createEmpresa = async (ev) => {
        ev.preventDefault();
        try {
            const response = await Axios.post("http://localhost:3005/company", {
                nombreEmpresa,
                segmento: selectedSegmento,
                url,
                descripcion
            });
            console.log("Empresa creada:", response.data);
        } catch (error) {
            console.log("Error al crear empresa:", error);
        }
    };

    return (
        
            <Div1>
                <Container1>

                    <Caja>
                        <Parrafo><h3>Crear empresa</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick= {cerrarcomponente}/>
                    </Caja>
                    <hr />


                    <Caja1>
                        <Parrafo1><h3>Nombre de la empresa</h3></Parrafo1>
                        <Input placeholder="Ingresar el nombre de la empresa"
                        onChange={e => setNombreEmpresa(e.target.value)}/>


                        <Parrafo1 ><h3> Segmento</h3></Parrafo1>
                        <SelectEmpresa value={selectedSegmento} onChange={e => setSelectedSegmento(e.target.value)}>
                        <option value="">Seleccionar segmento...</option>
                        {segmento.map(segmento => (
                        <option key={segmento.idSegmento} value={segmento.idSegmento}>
                        {segmento.segmento}
                        </option>
                        ))};
                    </SelectEmpresa>


                        <Parrafo1><h3>URL</h3></Parrafo1>
                        <Input placeholder="Introduce la dirrección web de la empresa" onChange={e => setUrl(e.target.value)}/>


                        <Parrafo1><h3>Resumen</h3></Parrafo1>
                        <Area placeholder="Describe la empresa" onChange={e => setDescripcion(e.target.value)}/>
                    </Caja1>
                    <hr />

                    <Caja2>
                        <Boton2>Cancelar</Boton2>
                        <Boton1 onClick={createEmpresa}>Crear empresa</Boton1>
                    </Caja2>
                </Container1> 
            </Div1>
        
    );
}
export default Retorno8;
