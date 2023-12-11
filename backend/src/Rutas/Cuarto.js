
const { Router } = require('express');
const router = Router();
const { getCuartos, registrarCuarto, getCuarto, actualizarCuarto, deletecuarto } = require('../Controladores/CuartosControlador');
 
router.route('/')
    .get(getCuartos)
    .post(registrarCuarto)

 router.route('/:id')   
   .get(getCuarto)
    .put(actualizarCuarto)
    .delete(deletecuarto)

    
module.exports = router;