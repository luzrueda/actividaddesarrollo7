import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class Iniciarsession extends Component {
    state = {
        Usuario:'', 
        Psw:'',
    
        editing: false
        
    }

  ingresopersona = async a =>{

        a.preventDefault();
        
        var cont2=0;
        var cc="";

        const resx=axios.get('http://localhost:8000/api/personasdigitales') 

        for(var ee1=0; ee1<(await resx).data.length; ee1++){
            
            if( (await resx).data[ee1].Usuario === this.state.Usuario ){
            if( (await resx).data[ee1].Psw === this.state.Psw ){
            cont2=cont2+1;
            cc= (await resx).data[ee1]._id;
            break;
            }
            }
            
            }

            if(cont2 > 0){
             window.location.href  = "/iniciarsessioningresopersona/"+cc;  
            }

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
              <h4 align="center">INGRESO PERSONA</h4>
              
              
              <div className="form-group">
                      <h5 align="left">Usuario</h5>
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Digite el usuario" 
                      name="Usuario"
                      onChange= {this.onInputChange}
                      value={this.state.Usuario}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <h5 align="left">Password</h5> 
                      
                      <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Digite el password" 
                      name="Psw"
                      onChange= {this.onInputChange}
                      value={this.state.Psw}
                      required
                      />  
                    </div> 
                
                    
              <form onSubmit={this.ingresopersona}>
                        <button type="submit" className="btn btn-primary">
                         INGRESAR
                        </button>
                    </form>

                    </div>
     
            </div>


           
        )
    }
}