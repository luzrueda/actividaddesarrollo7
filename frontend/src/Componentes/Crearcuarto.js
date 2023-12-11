
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import {Link} from "react-router-dom"

export default class Crearcuarto extends Component {

    state = {

        apartamentosdigitales:[],
        Nombrecuarto:'',
        Nombreapartamento:'',

        editing: false
    }
    
    async componentDidMount(){
      this.getapartamentos();

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/cuartosdigitales/' + this.props.match.params.id);
        
        this.setState({

        Nombrecuarto:res.data.Nombrecuarto,
        Nombreapartamento:res.data.Nombreapartamento,   
        editing: true,
        _id: this.props.match.params.id 
        })
    }
  }
  
  getapartamentos = async () =>{
    const per = await axios.get('http://localhost:8000/api/apartamentosdigitales');
    this.setState({apartamentosdigitales: per.data, 
    Nombreapartamento:per.data[0].Nombreapartamento});    
    }

    createcuarto = async a =>{

        a.preventDefault();

        const newDir = {

        Nombrecuarto:this.state.Nombrecuarto,
        Nombreapartamento:this.state.Nombreapartamento, 
           
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

          await axios.put('http://localhost:8000/api/cuartosdigitales/' + this.state._id, newDir);

          window.location.href = '/listarcuartosdigitales';  
          
          }

       
          else{
            await axios.post('http://localhost:8000/api/cuartosdigitales/', newDir);

            window.location.href = '/listarcuartosdigitales';  
          
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
              <h4 align="center">REGISTRO DE CUARTOS</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

              <div className="form-group">
                    
                     <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nombre del cuarto" 
                      name="Nombrecuarto"
                      onChange= {this.onInputChange}
                      value={this.state.Nombrecuarto}
                      required
                      />
                     </div>

                   <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">Apartamento</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="Nombreapartamento" >
                 
                                     {
                              
                              this.state.apartamentosdigitales.map(infaa => 
                               
                               <option key={infaa._id} value={infaa.Nombreapartamento}>
                                   
                                   {infaa.Nombreapartamento}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>
           
                  
              <form onSubmit={this.createcuarto}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR CUARTO
                        </button>
                    </form>

                    </div>
                   


            </div>
           
        )
    }
}

