import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listariniciosession extends Component {

    state= {
        personas: [], 
        mensajesrecibidos: [],
        clonusuario:'',
        cloncuarto:'',
        clonapartamento:'',
        clontorres:''
        
    }

    componentDidMount() {
     
        this.getpersonas(); 
        this.getmensajes();
        this.getclonusuario();   
       }


       getpersonas = async () =>{
        const per = await axios.get('http://localhost:8000/api/personasdigitales');
        this.setState({personas: per.data});    
        }

        getmensajes = async () =>{
            const per = await axios.get('http://localhost:8000/api/mensajes');
            this.setState({mensajesrecibidos: per.data});    
            }

            getclonusuario = async () =>{
                const per = await axios.get('http://localhost:8000/api/personasdigitales');

                for(var i=0; i<(await per).data.length; i++){ 
                if((await per).data[i]._id === this.props.match.params.id){

                this.setState({
                clonusuario: (await per).data[i].Usuario,
                cloncuarto: (await per).data[i].Nombrecuarto,
                clonapartamento: (await per).data[i].Nombreapartamento,
                clontorres: (await per).data[i].Nombretorre
                }); 
            
                }    
                }
                
                }

                deleteMensaje = async (id) => {
              
                    await axios.delete('http://localhost:8000/api/mensajes/' + id);
                    
                    this.getmensajes();     
                    
                }
      

        
    render() {
        
        return (

            <div>

            <td>
             <Link className="btn btn-success" to="/iniciarsession"><b>Cerrar sesión</b></Link>
            </td>

            <div class="btn btn-warning">
          <h5>INFORMACIÓN DE USUARIO JONATHAN CASTRO, FELIZ NAVIDAD</h5>   
          </div> 
            
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
                      <th scope='col'>Password</th>
  
                  </tr>
                 
              </thead>
              
              
              <tbody>

                  { 
                 
                      this.state.personas.filter(x=> x._id === this.props.match.params.id).map( 
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
                                      <td> { row.Psw } </td>
                                      
                                      
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
                                     
                                      <td>
                                      <Link className="btn btn-primary" to={"/createmensaje/" + row._id}>
                                       Enviar menssaje
                                      </Link>
                                      </td>

                     
                                      </tr>

                              )
                          }
                      )
                  }

              </tbody>
          </table>

          <div class="btn btn-warning">
          <h5>MENSAJES RECIBIDOS</h5>   
          </div>        
                
          <table className='table table-bordered'>
              <thead>
                  <tr>
                      <th scope='col'>Id mensaje</th>
                      <th scope='col'>De</th>
                      <th scope='col'>Mensaje</th>
                  </tr>
                 
              </thead>
              
              
              <tbody>

                  { 

                      this.state.mensajesrecibidos.filter(x=> x.Receptor === ""+this.state.clonusuario+"").map( 
                          ( row ) => {
                              return(
                                  <tr>  
                                      <td> { row._id } </td>
                                      <td> { row.Emisor } </td>
                                      <td> { row.Mensaje } </td>

                                      
                                      <td>
                                          <button className="btn btn-danger" onClick={() => this.deleteMensaje(row._id)}>
                                           Eliminar mensaje
                                          </button>
                                      </td>

                     
                                      </tr>

                              )
                          }
                      )
                  }

              </tbody>
          </table>

          <div class="btn btn-warning">
          <h5>COMPAÑEROS DE CUARTO</h5>   
          </div> 
            
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
                 
                      this.state.personas.filter(x=> x.Nombrecuarto === ""+this.state.cloncuarto+"").map( 
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
                                      
                                      </tr>

                              )
                          }
                      )
                  }

              </tbody>
          </table>
          
          <div class="btn btn-warning">
          <h5>COMPAÑEROS DE APARTAMENTO</h5>   
          </div> 
            
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
                 
                      this.state.personas.filter(x=> x.Nombreapartamento === ""+this.state.clonapartamento+"").map( 
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
                                      
                                      </tr>

                              )
                          }
                      )
                  }

              </tbody>
          </table>

          <div class="btn btn-warning">
          <h5>COMPAÑEROS DE TORRE</h5>   
          </div> 
            
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
                 
                      this.state.personas.filter(x=> x.Nombretorre === ""+this.state.clontorres+"").map( 
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
                                      
                                      </tr>

                              )
                          }
                      )
                  }

              </tbody>
          </table>

          <div class="btn btn-warning">
          <h5>COMPAÑEROS DE OTRAS TORRES</h5>   
          </div> 
            
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
                 
                      this.state.personas.filter(x=> x.Nombretorre !== ""+this.state.clontorres+"").map( 
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

