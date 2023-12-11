

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listartorresdigitales extends Component {

    state= {
        listartorres: [], 
    }

    componentDidMount() {
        this.gettorres();   
       } 
       
       gettorres = async () =>{
        const per = await axios.get('http://localhost:8000/api/torresdigitales');
        this.setState({listartorres:per.data});    
        }
        
        deleteTorre = async (id) => {
              
            await axios.delete('http://localhost:8000/api/torresdigitales/' + id);
            
            this.gettorres();     
            
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
                                <th scope='col'>Nombre torre</th>
                            </tr>
                            
                        </thead>
                        
                        
                        <tbody>
    
                            { 
                           
                                this.state.listartorres.map( 
                                    ( row ) => {
                                        return(
                                            <tr>
   
                                                <td> { row._id } </td>
                                                <td> { row.Nombretorre } </td>
                                                
                                                <td>
                                                <Link className="btn btn-primary" to={"/editartorre/" + row._id}>
                                                 Editar torre
                                                </Link>
                                                </td>
    
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => this.deleteTorre(row._id)}>
                                                     Eliminar Torre
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


