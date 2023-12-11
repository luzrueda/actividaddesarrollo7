

const { Router } = require('express');
const router = Router();
const { getTorres, registrarTorre, getTorre, actualizarTorre,  deleteTorre } = require('../Controladores/TorresControlador');
 

router.route('/')
    .get(getTorres)
    .post(registrarTorre)

 router.route('/:id')   
   .get(getTorre)
    .put(actualizarTorre)
    .delete(deleteTorre)

    
module.exports = router;