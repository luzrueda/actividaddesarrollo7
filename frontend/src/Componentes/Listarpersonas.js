

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listarpersonas extends Component {

    state= {
        personasdigitales: [], 
    }

    componentDidMount() {
        this.getpersonas();   
       } 
       
       getpersonas = async () =>{
        const per = await axios.get('http://localhost:8000/api/personasdigitales');
        this.setState({personasdigitales:per.data});    
        }
        
        deletePersona = async (id) => {
              
            await axios.delete('http://localhost:8000/api/personasdigitales/' + id);
            
            this.getpersonas();     
            
        }

        render() {
        
            return (
    
                <div>
                      <td>
                       <Link className="btn btn-primary" to="/createtorredigital"><b>Volver a inicio</b></Link>
                      </td>
                      
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th scope='col'>Id</th>
                                <th scope='col'>Nombres</th>
                                <th scope='col'>Apellidos</th>
                                <th scope='col'>Usuario</th>
                                <th scope='col'>Torre</th>
                                <th scope='col'>Apartamento</th>
                                <th scope='col'>Cuarto</th>
            
                            </tr>
                           
                        </thead>
                        
                        
                        <tbody>
    
                            { 
                           
                                this.state.personasdigitales.map( 
                                    ( row ) => {
                                        return(
                                            <tr>  
                                                <td> { row._id } </td>
                                                <td> { row.Nombres } </td>
                                                <td> { row.Apellidos } </td>
                                                <td> { row.Usuario } </td>
                                                <td> { row.Nombretorre } </td>
                                                <td> { row.Nombreapartamento } </td>
                                                <td> { row.Nombrecuarto } </td>
                                                
                                                
                                                <td>
                                                <Link className="btn btn-primary" to={"/editarpersonadigital/" + row._id}>
                                                 Editar persona
                                                </Link>
                                                </td>
    
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => this.deletePersona(row._id)}>
                                                     Eliminar persona
                                                    </button>
                                                </td>

                               
                                                </tr>

                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                    
                    
                    
                    </div>
                
                
    
    
            )
        }
}


