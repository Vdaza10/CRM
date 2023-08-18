import React from "react";
import { DivContainer, Container, Caja1, Caja2, Caja3, Caja4,Cajita } from "./styled";
import imagen from "../img/img1.png"

function Retorno1() {
    return (
        <div>
            <DivContainer>
                <Container>
                    <Caja1>
                        <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray" }}>
                            ID: Fundacion-et{" "}
                        </p>
                        <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray"  }}>
                            Vendí este mes
                        </p>
                        <Cajita>
                        <h1>cop 0,00</h1>
                        <img src={imagen} alt="img" style={{width:'40px',height:'40px'}}  />
                        </Cajita>
                        <hr />
                    </Caja1>

                    <Caja2>
                        <p style={{ fontStyle: "italic", fontSize: "20px" }}>Cuenta y planes </p>
                        <p style={{ fontStyle: "italic", fontSize: "20px" }}>perfil </p>
                        <hr />
                    </Caja2>
                    <Caja3>
                        <p style={{ fontStyle: "italic", fontSize: "20px" }}>Ajustes </p>
                        <p style={{ fontStyle: "italic", fontSize: "20px" }}>
                            Integración RD station marketing
                        </p>
                        <p style={{ fontStyle: "italic", fontSize: "20px" }}>Novedades del producto</p>
                        <hr />
                    </Caja3>
                    <Caja4>
                        <p style={{ fontStyle: "italic", fontSize: "20px" }}>Salir</p>
                    </Caja4>
                </Container>
            </DivContainer>
        </div>
    );
}

export default Retorno1;
