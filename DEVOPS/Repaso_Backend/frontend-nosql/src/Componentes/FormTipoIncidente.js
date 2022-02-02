import { Formik } from 'formik';
import axios from "axios"
import "./style.css"
import * as yup from "yup"

export const FormTipoIncidente = () => {
  //Crear un schema
  const tipoIncidenteSchema = yup.object().shape({
    nombre: yup.string().min(3).required()
  })

  const initialValues = { nombre: '' }


  const handleSubmit = async (values, formik) => {
    try {
      await axios.post("http://localhost:4001/tipos-incidentes", values)
      alert("Enviado ")
      formik.setSubmitting(false)
      formik.resetForm({ nombre: '' })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h2>Crear Tipo de Incidente</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={tipoIncidenteSchema}
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
            <label htmlFor="nombre">Ingresa nombre del tipo incidente</label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nombre}
              className="input"
              placeholder="Ingresa el nombre del tipo de incidente"
            />
            {errors.nombre}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
