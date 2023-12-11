
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Link} from "react-router-dom"

export default class Creartorredigital extends Component {
    state = {

        Nombretorre:'', 
        
        editing: false
    }
    
    async componentDidMount(){
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/torresdigitales/' + this.props.match.params.id);
        
        this.setState({

        Nombretorre:res.data.Nombretorre,
           
        editing: true,
        _id: this.props.match.params.id 
        })
        
    }
  }

    createtorre = async a =>{

        a.preventDefault();

        const newDir = {

            Nombretorre:this.state.Nombretorre, 
           
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

          await axios.put('http://localhost:8000/api/torresdigitales/' + this.state._id, newDir);

          window.location.href = '/listartorresdigitales';  
          
          }

       
          else{
            await axios.post('http://localhost:8000/api/torresdigitales/', newDir);

            window.location.href = '/listartorresdigitales';  
          
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
              <h4 align="center">REGISTRO TORRES DIGITALES</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

              <div className="form-group">
                    
                     <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nombre de la torre" 
                      name="Nombretorre"
                      onChange= {this.onInputChange}
                      value={this.state.Nombretorre}
                      required
                      />
                     </div>
           
                  
              <form onSubmit={this.createtorre}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR TORRE
                        </button>
                    </form>

                    </div>

                    <div className="card card-body">
                    <li className="nav-item">
                            <Link className="nav-link" to="/createapartamentodigital"><b>CREAR-APARTAMENTO</b></Link>
                    </li>
                    </div>

                    <div className="card card-body">
                    <li className="nav-item">
                            <Link className="nav-link" to="/listarapartamentosdigitales"><b>LISTAR-APARTAMENTOS</b></Link>
                            </li>
                    </div>

                    <div className="card card-body">
                    <li className="nav-item">
                            <Link className="nav-link" to="/createcuartodigital"><b>CREAR-CUARTO</b></Link>
                    </li>
                    </div>

                    <div className="card card-body">
                    <li className="nav-item">
                            <Link className="nav-link" to="/listarcuartosdigitales"><b>LISTAR-CUARTOS</b></Link>
                            </li>  

                    </div>
                    
                    
                    <div className="card card-body">
                    <li className="nav-item">
                            <Link className="nav-link" to="/createpersona"><b>CREAR-PERSONA</b></Link>
                    </li>
                    </div>

                    <div className="card card-body">
                    <li className="nav-item">
                            <Link className="nav-link" to="/listarpersonasdigitales"><b>LISTAR-PERSONAS</b></Link>
                            </li>
                    </div>

            </div>
           
        )
    }
}

