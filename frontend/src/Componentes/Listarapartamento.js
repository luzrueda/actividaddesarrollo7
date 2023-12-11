

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listarapartamento extends Component {

    state= {
        listarapartamentos: [], 
    }

    componentDidMount() {
        this.getapartamentos();   
       } 
       
       getapartamentos = async () =>{
        const per = await axios.get('http://localhost:8000/api/apartamentosdigitales');
        this.setState({listarapartamentos:per.data});    
        }
        
        deleteApartamento = async (id) => {
              
            await axios.delete('http://localhost:8000/api/apartamentosdigitales/' + id);
            
            this.getapartamentos();     
            
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
                                <th scope='col'>Nombre del apartamento</th>
                                <th scope='col'>Nombre de la torre</th>
            
                            </tr>
                           
                        </thead>
                        
                        
                        <tbody>
    
                            { 
                           
                                this.state.listarapartamentos.map( 
                                    ( row ) => {
                                        return(
                                            <tr>
                                                <td> { row._id } </td>
                                                <td> { row.Nombreapartamento } </td>
                                                <td> { row.Nombretorre } </td>
                                                
                                                <td>
                                                <Link className="btn btn-primary" to={"/editarapartamento/" + row._id}>
                                                 Editar apartamento
                                                </Link>
                                                </td>
    
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => this.deleteApartamento(row._id)}>
                                                     Eliminar apartamento
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


