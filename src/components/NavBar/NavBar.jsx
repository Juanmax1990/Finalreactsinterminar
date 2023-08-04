import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg barraNav">
      <div className="container-fluid">
        <Link to='/'>
          <h2 className="logo">JMD Tenis & Padel</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              <NavLink to={`category/Raquetas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >
                Raquetas

              </NavLink>

            </li>
            <li className="nav-item">

              <NavLink to={`category/Paletas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >

                Paletas

              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink to={`category/Calzado`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >

                Calzado

              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink to={`category/Indumentaria`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >

                Indumentaria

              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink to={`category/Encordados`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >

                Encordados

              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink to={`category/Accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >

                Accesorios

              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink to={`category/Suplementos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >

                Suplementos

              </NavLink>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
