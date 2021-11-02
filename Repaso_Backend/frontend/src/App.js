import { FormIncidente } from "./Componentes/FormIncidente";
import { Container, Row, Col, Navbar } from "react-materialize"

function App() {
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
            <FormIncidente />
          </Col>
          <Col s={6}>
            <h3>Col - 6</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
