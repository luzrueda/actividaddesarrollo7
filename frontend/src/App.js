import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './Componentes/Navegacion'

import Listartorres from './Componentes/Listartorresdigitales'
import creartorredigital from './Componentes/Creartorredigital'
import editartorredigita from './Componentes/Creartorredigital'
import listarapartamento from './Componentes/Listarapartamento'
import crearapartamentodigital from './Componentes/Crearapartamento'
import editarapartamento from './Componentes/Crearapartamento'
import crearcuarto from './Componentes/Crearcuarto'
import listarcuartos from './Componentes/Listarcuarto'
import editarcuarto from './Componentes/Crearcuarto'
import listarpersonasdigitales from './Componentes/Listarpersonas'
import createpersona from './Componentes/Crearpersona'
import editarpersona from './Componentes/Crearpersona'
import createmensaje from './Componentes/Enviarmensaje'
import iniciarsession from './Componentes/Iniciarsession'
import listariniciosession from './Componentes/Listariniciosession'


function App() {
  return (
    <Router>
      <Navegacion />

      <div className="container p-4">
        <Route path="/" exact component={creartorredigital} />
        <Route path="/listartorresdigitales" component={Listartorres} />
        <Route path="/createtorredigital" component={creartorredigital} />
        <Route path="/editartorre/:id" component={editartorredigita} />
        <Route path="/listarapartamentosdigitales" component={listarapartamento} />
        <Route path="/createapartamentodigital" component={crearapartamentodigital} />
        <Route path="/editarapartamento/:id" component={editarapartamento} />
        <Route path="/createcuartodigital" component={crearcuarto} />
        <Route path="/listarcuartosdigitales" component={listarcuartos} />
        <Route path="/editarcuarto/:id" component={editarcuarto} />
        <Route path="/listarpersonasdigitales" component={listarpersonasdigitales} />
        <Route path="/createpersona" component={createpersona} />
        <Route path="/editarpersonadigital/:id" component={editarpersona} />
        <Route path="/createmensaje/:id" component={createmensaje} />
        <Route path="/iniciarsession" component={iniciarsession} />
        <Route path="/iniciarsessioningresopersona/:id" component={listariniciosession} />
       
      </div>

    </Router>
  );
}

export default App;

