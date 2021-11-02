import { useEffect, useState } from "react"

export const FormIncidente = () => {

  const URL_BASE = "http://localhost:4001"

  const [lugares, setLugares] = useState([]) //Estado del componente de lugares
  const [tiposIncidentes, setTiposIncidentes] = useState([])//Estado del componente de tipos de incidentes

  useEffect(() => {

    //Obtienes los lugares
    const getLugares = async () => {
      const respuesta = await fetch(`${URL_BASE}/lugares`)
      const data = await respuesta.json()
      setLugares(data.msg)
    }
    //Obtienes los tipos de incidentes
    const getTiposIncidentes = async () => {
      const respuesta = await fetch(`${URL_BASE}/tipos-incidentes`)
      const data = await respuesta.json()
      setTiposIncidentes(data.msg)
    }
    getLugares()
    getTiposIncidentes()
  }, [])


  return (
    <>
      <h3>Registrar incidente</h3>
      {
        JSON.stringify(lugares)
      }
      <p>-------------------------</p>
      {
        JSON.stringify(tiposIncidentes)
      }
    </>
  )
}
