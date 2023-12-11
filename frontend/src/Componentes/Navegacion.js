
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <Link className="navbar-brand" to="/">
                Torres digitales
                </Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/createtorredigital"><b>CREAR-TORRE</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/listartorresdigitales"><b>LISTAR-TORRES</b></Link>
                            </li>

                    <li className="nav-item">
                            <Link className="nav-link" to="/iniciarsession"><b>INICIAR-SESSION</b></Link>
                    </li>
                    

                        </ul>
                    </div>
                </div>


            </nav>
        )
    }
}

