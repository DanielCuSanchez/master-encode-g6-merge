import { Formik } from 'formik';
import axios from "axios"
import "./style.css"

export const FormUsuario = () => {
  const initialValues = { email: '', password: '', role: '' }
  const validateFunction = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'JEJEJEJ :D';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post("http://localhost:4001/usuarios", values)
      alert("Enviado ")
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h2>Crear usuario</h2>
      <Formik
        initialValues={initialValues}
        validate={validateFunction}
        onSubmit={handleSubmit}
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
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="input"
              placeholder="Ingresa tu email"
            />
            {errors.email && touched.email && errors.email}
            <input
              placeholder="Ingresa tu password"
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <input
              placeholder="Ingresa ROLE"
              className="input"
              type="text"
              name="role"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
            />
            {errors.role && touched.role && errors.role}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
