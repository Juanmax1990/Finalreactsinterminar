import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'
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
              <div className="collapse navbar-collapse"      id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">

                  <NavLink to={`category/Raquetas`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Raquetas
                  </NavLink>
                                
                  </li>
                  <li className="nav-item">

                  <NavLink to={`category/paletas`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Paletas
                  </NavLink>
            
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/calzado`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Calzado
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/indumentaria`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Indumentaria
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/encordados`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Encordados
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/accesorios`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Accesorios
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/suplementos`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
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
