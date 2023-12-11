
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import {Link} from "react-router-dom"

export default class Enviarmensaje extends Component {

    state = {

        listarpersonas: [], 

        Emisor:'',
        Receptor:'',
        Mensaje:'',

        editing: false
    }
    
    async componentDidMount(){
      this.getpersonas();
  }
  
  getpersonas = async () =>{
    const per = await axios.get('http://localhost:8000/api/personasdigitales');
    this.setState({listarpersonas:per.data});    
    }

    createmensaje = async a =>{

        a.preventDefault();
        const personas = await axios.get('http://localhost:8000/api/personasdigitales');

        var per = "";
        
        for(var i=0; i<(await personas).data.length; i++){ 
          if((await personas).data[i]._id === this.props.match.params.id){
           per = (await personas).data[i].Usuario; 
           break;
          }  
        }

        const newDir = {

        Emisor:""+per+"",
        Receptor:this.state.Receptor, 
        Mensaje:this.state.Mensaje,
           
            editing: true,
            _id: this.props.match.params.id 
        
        };

            await axios.post('http://localhost:8000/api/mensajes/', newDir);

            window.location.href  = "/iniciarsessioningresopersona/"+this.props.match.params.id;  

    }

    onInputChange = e =>{
        
        this.setState({
          [e.target.name]: e.target.value  
        })
    }

    onInputChange2 = e =>{
        
      this.setState({
        [e.target.name]: e.target.value  
      })
  }


    onChangeFechanac = e => {
      this.setState({e})
    }

    
    render() {

        return (
            

          <div className="col-md-25 offset-md-1">
          <div className="card card-body">
              <h4 align="center">REGISTRO DE MENSAJES</h4>
              <h4 bgcolor="black">Contactos</h4>


                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">Escoger el contacto</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="Receptor" >
                 
                                     {
                              
                              this.state.listarpersonas.map(infaa => 
                               
                               <option key={infaa._id} value={infaa.Usuario}>
                                   
                                   {infaa.Usuario}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>

                  <div className="form-group">
                    
                    <input 
                     type="text" 
                     className="form-control" 
                     placeholder="Redactar mensaje" 
                     name="Mensaje"
                     onChange= {this.onInputChange}
                     value={this.state.Mensaje}
                     required
                     />
                    </div>
           
                  
              <form onSubmit={this.createmensaje}>
                        <button type="submit" className="btn btn-primary">
                         ENVIAR MENSAJE
                        </button>
                    </form>

                    </div>
                   


            </div>
           
        )
    }
}

