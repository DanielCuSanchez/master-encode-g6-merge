import { LayoutPage } from "./Componentes/LayoutPage";
import { PageAdd } from "./Pages/PageAdd";
import { PageConsult } from "./Pages/PageConsult";


export const routes = [
  {
    path: "/",
    element: (
      <LayoutPage>
        <PageAdd />
      </LayoutPage>
    )
  },
  {
    path: "consultar",
    element: (
      <LayoutPage>
        <PageConsult />
      </LayoutPage>
    )
  }
]