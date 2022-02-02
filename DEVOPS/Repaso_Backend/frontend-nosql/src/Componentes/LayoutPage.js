import { Link } from "react-router-dom"


export const LayoutPage = (props) => {
  return (
    <>
      <nav className="bg-indigo-400 flex justify-around min-h-nav items-center">
        <p>Logo</p>
        <ul className="flex justify-around min-w-1/4">
          <li>
            <Link to="/" >
              Agregar
            </Link>
          </li>
          <li>
            <Link to="/consultar">
              Consultar
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="mt-10">
          {props.children}
        </div>
      </div>
    </>
  )
}
