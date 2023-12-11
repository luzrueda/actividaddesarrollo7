

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listarcuarto extends Component {

    state= {
        listarcuartos: [], 
    }

    componentDidMount() {
        this.getcuartos();   
       } 
       
       getcuartos = async () =>{
        const per = await axios.get('http://localhost:8000/api/cuartosdigitales');
        this.setState({listarcuartos:per.data});    
        }
        
        deleteCuarto = async (id) => {
              
            await axios.delete('http://localhost:8000/api/cuartosdigitales/' + id);
            
            this.getcuartos();     
            
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
                                <th scope='col'>Nombre del cuarto</th>
                                <th scope='col'>Nombre del apartamento</th>
            
                            </tr>
                           
                        </thead>
                        
                        
                        <tbody>
    
                            { 
                           
                                this.state.listarcuartos.map( 
                                    ( row ) => {
                                        return(
                                            <tr>  
                                                <td> { row._id } </td>
                                                <td> { row.Nombrecuarto } </td>
                                                <td> { row.Nombreapartamento } </td>
                                                
                                                <td>
                                                <Link className="btn btn-primary" to={"/editarcuarto/" + row._id}>
                                                 Editar cuarto
                                                </Link>
                                                </td>
    
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => this.deleteCuarto(row._id)}>
                                                     Eliminar cuarto
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


