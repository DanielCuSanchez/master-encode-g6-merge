import { FormIncidente } from "../Componentes/FormIncidente"
import { FormLugar } from "../Componentes/FormLugar"
import { FormTipoIncidente } from "../Componentes/FormTipoIncidente"
import { FormUsuario } from "../Componentes/FormUsuario"

export const PageAdd = () => {
  return (
    <div>
      <h2>FORMULARIOS</h2>
      {/* Formulario de lugar */}
      <FormLugar />

      {/* Formulario de tipo incidente */}

      <FormTipoIncidente />

      {/* Formulario de usuario */}
      <FormUsuario />

      {/* Formulario de incidente */}
      <FormIncidente />
    </div>
  )
}
