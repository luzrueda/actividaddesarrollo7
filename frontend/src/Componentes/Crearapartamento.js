
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import {Link} from "react-router-dom"

export default class Crearapartamento extends Component {
    state = {
        torresdigitales:[],
        Nombreapartamento:'',
        Nombretorre:'',

        editing: false
    }
    
    async componentDidMount(){
      this.gettorres();

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/apartamentosdigitales/' + this.props.match.params.id);
        
        this.setState({

        Nombreapartamento:res.data.Nombreapartamento,
        Nombretorre:res.data.Nombretorre,   
        editing: true,
        _id: this.props.match.params.id 
        })
        
    }
  }
  
  gettorres = async () =>{
    const per = await axios.get('http://localhost:8000/api/torresdigitales');
    this.setState({torresdigitales: per.data, 
    Nombretorre:per.data[0].Nombretorre});    
    }

    createapartamento = async a =>{

        a.preventDefault();

        const newDir = {

            Nombreapartamento:this.state.Nombreapartamento, 
            Nombretorre:this.state.Nombretorre,
           
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

          await axios.put('http://localhost:8000/api/apartamentosdigitales/' + this.state._id, newDir);

          window.location.href = '/listarapartamentosdigitales';  
          
          }

       
          else{
            await axios.post('http://localhost:8000/api/apartamentosdigitales/', newDir);

            window.location.href = '/listarapartamentosdigitales';  
          
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
              <h4 align="center">REGISTRO APARTAMENTO</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

              <div className="form-group">
                    
                     <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nombre del apartamento" 
                      name="Nombreapartamento"
                      onChange= {this.onInputChange}
                      value={this.state.Nombreapartamento}
                      required
                      />
                     </div>

                   <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">Torre</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="Nombretorre" >
                 
                                     {
                              
                              this.state.torresdigitales.map(infaa => 
                               
                               <option key={infaa._id} value={infaa.Nombretorre}>
                                   
                                   {infaa.Nombretorre}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>
           
                  
              <form onSubmit={this.createapartamento}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR APARTAMENTO
                        </button>
                    </form>

                    </div>
                   


            </div>
           
        )
    }
}

