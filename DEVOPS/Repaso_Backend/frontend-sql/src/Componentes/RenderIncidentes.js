import { useEffect, useState } from "react"
import { Card } from "react-materialize"


export const RenderIncidentes = ({ agregarIncidente }) => {

  const [incidentes, setIncidentes] = useState([])

  // Se ejecuta cada vez que se hace un post de un incidente
  useEffect(() => {
    const getIncidentes = async () => {
      const response = await fetch("http://localhost:4001/incidentes")
      const incidentes = await response.json()
      setIncidentes(incidentes.msg)
    }
    getIncidentes()
  }, [agregarIncidente])

  return (
    <div>
      <h2>Incidentes</h2>
      {
        // Retona una card por cada incidente
        incidentes.map(incidente => {
          return (
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title={incidente.tipo_incidente}
            >
              {
                incidente.lugar
              }
              <div>
                {incidente.usuario}
              </div>
            </Card>
          )
        })
      }

    </div>
  )
}
