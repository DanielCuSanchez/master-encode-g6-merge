import { Formik } from 'formik';
import axios from "axios"
import "./style.css"
import * as yup from "yup"

export const FormLugar = () => {
  //Crear un schema
  const lugarSchema = yup.object().shape({
    nombre: yup.string().min(3).required()
  })

  const initialValues = { nombre: '' }


  const handleSubmit = async (values, formik) => {
    try {
      await axios.post("http://localhost:4001/lugares", values)
      alert("Enviado ")
      formik.setSubmitting(false)
      formik.resetForm({ nombre: '' })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h2>Crear lugar</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={lugarSchema}
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
            <label htmlFor="nombre">Ingresa nombre de lugar</label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nombre}
              className="input"
              placeholder="Ingresa el nombre del lugar"
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
