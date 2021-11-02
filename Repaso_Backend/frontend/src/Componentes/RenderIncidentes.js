import { useEffect, useState } from "react"
import { Card } from "react-materialize"


export const RenderIncidentes = ({ agregarIncidente }) => {

  const [incidentes, setIncidentes] = useState([])
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
