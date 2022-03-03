import React, { Component } from 'react'
import CartWidget from '../Carro/CartWidget'
import { Link } from "react-router-dom";


 class Navbar extends Component {
    render() {
        return (
          <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{color:"#D0C9C9"}}>LOGO</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link to="Productos">
                        <span className="nav-link active" aria-current="page" style={{color:"#D0C9C9"}}>Home</span>
                      </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{color:"#D0C9C9"}}>Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#D0C9C9"}}>
                      Categoria
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#" style={{color:"#D0C9C9"}}>Action</a></li>
                      <li><a className="dropdown-item" href="#" style={{color:"#D0C9C9"}}>Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#" style={{color:"#D0C9C9"}}>Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" style={{color:"#D0C9C9"}}>En reparacion</a>
                  </li>
                </ul>
                <div className="d-flex">
                    
                    <Link id="RouterNavLink" style={null} to="/Cart"><CartWidget/></Link>
                    
                </div>
              </div>
            </div>
          </nav>
          </div>
        )
    }
}

export default Navbar;

