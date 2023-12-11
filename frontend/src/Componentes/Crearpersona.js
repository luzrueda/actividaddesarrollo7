
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import {Link} from "react-router-dom"

export default class Crearpersona extends Component {

    state = {
        cuartosdigitales:[],

        Nombretorre:'', 
        Nombreapartamento:'', 
        Nombrecuarto:'', 
        Nombres:'', 
        Apellidos:'', 
        Usuario:'', 
        Psw:'',

        editing: false
    }
    
    async componentDidMount(){
        
      this.getcuartos();
      

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/personasdigitales/' + this.props.match.params.id);
        
        this.setState({

        Nombretorre:res.data.Nombretorre, 
        Nombreapartamento:res.data.Nombreapartamento, 
        Nombrecuarto:res.data.Nombrecuarto, 
        Nombres:res.data.Nombres, 
        Apellidos:res.data.Apellidos, 
        Usuario:res.data.Usuario, 
        Psw:res.data.Psw,

        editing: true,
        _id: this.props.match.params.id 
        })
    }
  }
  

    getcuartos = async () =>{
    const per = await axios.get('http://localhost:8000/api/cuartosdigitales');
    this.setState({cuartosdigitales:per.data, Nombrecuarto:per.data[0].Nombrecuarto});    
    }

   

    createpersona = async a =>{

        a.preventDefault();

        const cuartos = await axios.get('http://localhost:8000/api/cuartosdigitales');
        const apartamentos = await axios.get('http://localhost:8000/api/apartamentosdigitales');

        var apto = "";
        var torre = "";

        for(var i=0; i<(await cuartos).data.length; i++){ 
        for(var j=0; j<(await apartamentos).data.length; j++){    

        if((await cuartos).data[i].Nombrecuarto === this.state.Nombrecuarto && (await apartamentos).data[j].Nombreapartamento === (await cuartos).data[i].Nombreapartamento){
        apto = (await cuartos).data[i].Nombreapartamento;
        torre = (await apartamentos).data[j].Nombretorre;     
        }
        }
       }
        

        const newDir = {

            Nombretorre:""+torre+"", 
            Nombreapartamento:""+apto+"", 
            Nombrecuarto:this.state.Nombrecuarto, 
            Nombres:this.state.Nombres, 
            Apellidos:this.state.Apellidos, 
            Usuario:this.state.Usuario, 
            Psw:this.state.Psw,
           
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

            var aptoo = "";
            var torree = "";
    
            for(var ii=0; ii<(await cuartos).data.length; ii++){ 
            for(var jj=0; jj<(await apartamentos).data.length; jj++){    
    
            if((await cuartos).data[ii].Nombrecuarto === this.state.Nombrecuarto && (await apartamentos).data[jj].Nombreapartamento === (await cuartos).data[ii].Nombreapartamento){
                aptoo = (await cuartos).data[ii].Nombreapartamento;
                torree = (await apartamentos).data[jj].Nombretorre;     
            }
            }
           }

           const newDir2 = {

            Nombretorre:""+torree+"", 
            Nombreapartamento:""+aptoo+"", 
            Nombrecuarto:this.state.Nombrecuarto, 
            Nombres:this.state.Nombres, 
            Apellidos:this.state.Apellidos, 
            Usuario:this.state.Usuario, 
            Psw:this.state.Psw,
           
            editing: true,
            _id: this.props.match.params.id 
        
        };

          await axios.put('http://localhost:8000/api/personasdigitales/' + this.state._id, newDir2);

          window.location.href = '/listarpersonasdigitales';  
          
          }

       
          else{
            await axios.post('http://localhost:8000/api/personasdigitales/', newDir);

            window.location.href = '/listarpersonasdigitales';    
          
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
              <h4 align="center">REGISTRO DE PERSONAS</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

              
                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">Cuarto</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="Nombrecuarto" >
                 
                                     {
                              
                              this.state.cuartosdigitales.map(infaa => 
                               
                               <option key={infaa._id} value={infaa.Nombrecuarto}>
                                   
                                   {infaa.Nombrecuarto}
                                   
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
                      placeholder="Nombres" 
                      name="Nombres"
                      onChange= {this.onInputChange}
                      value={this.state.Nombres}
                      required
                      />
                     </div>

                     <div className="form-group">
                    
                    <input 
                     type="text" 
                     className="form-control" 
                     placeholder="Apellidos" 
                     name="Apellidos"
                     onChange= {this.onInputChange}
                     value={this.state.Apellidos}
                     required
                     />
                    </div>

                    <div className="form-group">
                    
                    <input 
                     type="text" 
                     className="form-control" 
                     placeholder="Usuario" 
                     name="Usuario"
                     onChange= {this.onInputChange}
                     value={this.state.Usuario}
                     required
                     />
                    </div>

                    <div className="form-group">
                    
                    <input 
                     type="password" 
                     className="form-control" 
                     placeholder="Digitae el password" 
                     name="Psw"
                     onChange= {this.onInputChange}
                     value={this.state.Psw}
                     required
                     />
                    </div>

                  
           
                  
              <form onSubmit={this.createpersona}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR PERSONA
                        </button>
                    </form>

                    </div>
                   


            </div>
           
        )
    }
}

