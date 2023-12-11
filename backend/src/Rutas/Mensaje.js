const { Router } = require('express');
const router = Router();
const { getMensajes, registrarMensajes, getMensaje, deleteMensaje } = require('../Controladores/MensajeControlador');
 
router.route('/')
    .get(getMensajes)
    .post(registrarMensajes)

 router.route('/:id')   
   .get(getMensaje)
    .delete(deleteMensaje)

    
module.exports = router;