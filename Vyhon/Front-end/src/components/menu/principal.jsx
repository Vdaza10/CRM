 import React, {useState}from "react";
import { Link } from "react-router-dom"
import { Contenedor, ContenedorBusqueda, Despegable, Flecha, ImagenPerfil, Logo, MenuItem, Menucontainer, Menudesplegable, Navegacion, NombreUsuario, PerfilUsiario} from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import imagen from "../img/logito.png";
import Retorno1 from "../perfi";

const Menu = () => {
    // Estado para controlar la visibilidad del menú desplegable
    const [desplegado, setDesplegable] = useState(false); 
    // Estado para controlar la visibilidad del menú desplegable de perfil
    const [perfilDesplegable, setPerfilDesplegable] = useState(false);

    //funciones de manejo para manejar los cambios en el estado de los menu
    const toggleDesplegable = () => { 
        setDesplegable(!desplegado);
    };
    
    /* nos llevara a una vista con otras opciones */
    const desplegablePerfil = () => {
        setPerfilDesplegable(!perfilDesplegable); 
    };
    
    return (
        <Contenedor >
            {/* Barra de navegación */}
            <Navegacion>
                <Logo src= {imagen}></Logo>
            </Navegacion>

            <Menucontainer>
                {/*utilizamos el <link> de react para asi indicar la navegacion */}
                    <Link to="/negocios" style={{textDecoration:"none", color: "white"}}><MenuItem>Negocios</MenuItem></Link> 
                    <Link to="/empresas" style={{textDecoration:"none", color: "white"}}><MenuItem >Empresas</MenuItem></Link>
                    <Link to="/contactos" style={{ textDecoration: "none", color: "white" }}><MenuItem >Contactos</MenuItem></Link>
                    <Link to="/tareas" style={{ textDecoration: "none", color: "white" }}><MenuItem>Tareas</MenuItem></Link>
                    
                    <MenuItem onClick={toggleDesplegable} style={{ textDecoration: "none", color: "white" }}>Analisis {/* despliega un contenedor que nos da una informacion */}
                        <Flecha isOpen={desplegado}></Flecha>
                    </MenuItem>
                        <Despegable desplegado={desplegado}>
                        <MenuItem >Informes</MenuItem> {/* aparece esta informacion despues de haberle dado clik al menu de analisis */}
                        <MenuItem>Analisis de marketing y ventas</MenuItem> </Despegable>
                        <MenuItem style={{ textDecoration: "none", color: "white" }}>Marketing</MenuItem>  {/* Otro ítem del menú */}
            </Menucontainer>
            <ContenedorBusqueda>
                    <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "with" }}/>

                {/* Menú desplegable de perfil de usuario */}
                <PerfilUsiario >
                    <ImagenPerfil onClick={desplegablePerfil}  isOpen={perfilDesplegable}></ImagenPerfil> {/* se veran reflejada las vistas al momento de darle click */}
                    <Menudesplegable perfilDesplegable = {perfilDesplegable}><Retorno1></Retorno1></Menudesplegable>
                    <NombreUsuario>helena</NombreUsuario>
                </PerfilUsiario>
            </ContenedorBusqueda>
        </Contenedor>
    );
};
export default Menu;





