const { Router } = require('express');
const router = Router();
const { getPersonas, registrarPersonas, getPersona, actualizarPersona, deletepersona } = require('../Controladores/PersonasControlador');
 
router.route('/')
    .get(getPersonas)
    .post(registrarPersonas)

 router.route('/:id')   
   .get(getPersona)
    .put(actualizarPersona)
    .delete(deletepersona)

    
module.exports = router;