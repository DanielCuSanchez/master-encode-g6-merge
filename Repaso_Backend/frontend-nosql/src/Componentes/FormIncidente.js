import { Field, Formik } from 'formik';
import axios from "axios"
import "./style.css"
import * as yup from "yup"
import { useEffect, useState } from 'react';

export const FormIncidente = () => {

  const [options, setOptions] = useState({
    usuarios: [],
    lugares: [],
    tiposIncidentes: []
  })

  const URL = "http://localhost:4001"

  const getAllUsuarios = async () => {
    const response = await axios.get(`${URL}/usuarios`)
    return response.data
  }
  const getAllLugares = async () => {
    const response = await axios.get(`${URL}/lugares`)
    return response.data
  }
  const getAllTiposIncidentes = async () => {
    const response = await axios.get(`${URL}/tipos-incidentes`)
    return response.data
  }

  useEffect(() => {
    const allPromises = async () => {
      const usuarios = await getAllUsuarios()
      const lugares = await getAllLugares()
      const tiposIncidentes = await getAllTiposIncidentes()
      setOptions({
        usuarios: usuarios.data,
        lugares: lugares.data,
        tiposIncidentes: tiposIncidentes.data
      })
    }
    allPromises()
  }, [])

  //Crear un schema
  const incidenteSchema = yup.object().shape({
    usuario: yup.string().required(),
    lugar: yup.string().required(),
    tipo_incidente: yup.string().required()
  })

  const initialValues = { usuario: '', lugar: '', tipo_incidente: '' }


  const handleSubmit = async (values, formik) => {
    try {
      await axios.post("http://localhost:4001/incidentes", values)
      alert("Incidente Registrado :D")
      formik.setSubmitting(false)
      formik.resetForm({})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h2>Registra un nuevo incidente</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={incidenteSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="usuario">Selecciona un usuario</label>

            <Field name="usuario" as="select">
              {
                options.usuarios.map(usuario => (
                  <option value={usuario._id}>{usuario.role}</option>
                ))
              }
            </Field>
            {
              errors.usuario
            }
            <label htmlFor="lugar">Selecciona un lugar</label>
            <Field name="lugar" as="select">
              {
                options.lugares.map(lugar => (
                  <option value={lugar._id}>{lugar.nombre}</option>
                ))
              }
            </Field>
            {
              errors.lugar
            }
            <label htmlFor="tipo_incidente">Selecciona un tipo de incidente</label>
            <Field name="tipo_incidente" as="select">
              {
                options.tiposIncidentes.map(tipo => (
                  <option value={tipo._id}>{tipo.nombre}</option>
                ))
              }
            </Field>
            {
              errors.tipo_incidente
            }
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
