import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import { routes } from "./routes";

const AppRoutes = () => {
  const contenido = useRoutes(routes)
  return (
    <>
      {contenido}
    </>
  )
}
function App() {
  return (
    <Router >
      <AppRoutes />
    </Router>
  );
}
export default App;
