
const { Router } = require('express');
const router = Router();
const { getApartamentos, registrarApartamento, getApartamento, actualizarApartamento,  deleteapartamento } = require('../Controladores/ApartamentosControlador');
 
router.route('/')
    .get(getApartamentos)
    .post(registrarApartamento)

 router.route('/:id')   
   .get(getApartamento)
    .put(actualizarApartamento)
    .delete(deleteapartamento)

    
module.exports = router;