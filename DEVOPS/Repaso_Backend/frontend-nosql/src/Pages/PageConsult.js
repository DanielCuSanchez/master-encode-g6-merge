import { useEffect, useState } from "react"

export const PageConsult = () => {

  const [incidentes, setIncidentes] = useState([])

  useEffect(() => {
    const getIncidentes = async () => {
      try {
        const response = await fetch("http://localhost:4001/incidentes")
        const jsonParse = await response.json()
        console.log(jsonParse.data)
        setIncidentes(jsonParse.data)
      } catch (error) {
        console.log(error)
      }
    }

    getIncidentes()
  }, [])

  return (
    <div>
      <h2>TITULO</h2>
      <div>
        BOTONES
      </div>
      <div>
        <h3>LISTA DE INCIDENTES</h3>

        <div className="Lista">
          {
            incidentes.map(incindente => (<CardIncidente {...incindente} />))
          }
        </div>
      </div>
    </div>
  )
}

const CardIncidente = (incidente) => {
  return (
    <div
      className="
      border-solid
      border-4
      border-indigo-500
      max-w-1/4 p-4
      rounded
      shadow-2xl
      hover:border-black
      ">
      <h4>Role de usuario: {incidente.usuario.role}</h4>
      <p>Lugar del incidente: {incidente.lugar.nombre}</p>
      <p>Tipo de incidente: {incidente.tipo_incidente.nombre}</p>
      <span>Creado el: {incidente.createdAt}</span>
    </div>
  )
}