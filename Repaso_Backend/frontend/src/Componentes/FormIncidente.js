import { useEffect, useState } from "react"
import { Select } from "react-materialize"
import axios from "axios"

import { useForm, Controller } from "react-hook-form"

export const FormIncidente = ({ cambiarEstado }) => {

  const URL_BASE = "http://localhost:4001"

  const [lugares, setLugares] = useState([]) //Estado del componente de lugares
  const [tiposIncidentes, setTiposIncidentes] = useState([])//Estado del componente de tipos de incidentes

  const { register, handleSubmit, control, formState: { errors } } = useForm();

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

  const handlerSubmitIncidente = async (data) => {
    const incidente = {
      ...data,
      id_usuario: 1
    }
    try {
      await axios.post(`${URL_BASE}/incidentes`, incidente)
      alert("POST EXITOSO")
      cambiarEstado((estado) => cambiarEstado(!estado))
    } catch (error) {
      console.log(error)
      alert("ERROR")
    }
  }
  return (
    <>
      <h3>Registrar incidente</h3>
      <form onSubmit={handleSubmit(handlerSubmitIncidente)}>
        <Controller
          {...register("id_lugar")}
          control={control}
          defaultValue={false}
          rules={{
            required: {
              value: true,
              message: "TIENES QUE SELECCIONAR UNA OPCIÓN"
            }
          }}
          render={({ field }) =>
            <Select
              {...field}
              label="Selecciona el lugar"
            >
              {
                lugares.map(lugar => (
                  <option key={lugar.nombre} value={lugar.id}>
                    {lugar.nombre}
                  </option>
                ))
              }
            </Select>
          }
        />
        <span className="red-text">{errors.id_lugar && errors.id_lugar.message}</span>
        <Controller
          {...register("id_tipo_incidente")}
          rules={{
            required: {
              value: true,
              message: "TIENES QUE SELECCIONAR UNA OPCIÓN"
            }
          }}
          control={control}
          defaultValue={false}
          render={({ field }) =>
            <Select
              {...field}
              label="Selecciona el tipo de incidente"
            >
              {
                tiposIncidentes.map(tipo => (
                  <option key={tipo.nombre} value={tipo.id}>
                    {tipo.nombre}
                  </option>
                ))
              }
            </Select>
          }
        />
        <span className="red-text">{errors.id_lugar && errors.id_lugar.message}</span>
        <button
          type="submit"
          className="btn"
        >
          Registrar incidente
        </button>
      </form>
    </>
  )
}
