import { FormIncidente } from "./Componentes/FormIncidente";
import { Container, Row, Col, Navbar } from "react-materialize"
import { RenderIncidentes } from "./Componentes/RenderIncidentes";
import { useState } from "react";

function App() {

  const [agregarIncidente, setAgregarIncidente] = useState(false)
  return (
    <>
      <Navbar
        brand={<h6>Aplicación de Jurassic</h6>}
        centerLogo
      >
      </Navbar>
      <Container>
        <Row>
          <Col s={6}>
            <FormIncidente cambiarEstado={setAgregarIncidente} />
          </Col>
          <Col s={6}>
            <RenderIncidentes agregarIncidente={agregarIncidente} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
