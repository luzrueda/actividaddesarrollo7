
const { Schema, model } = require('mongoose');

const personaSchema = new Schema({

    Nombretorre: {
        type: String,
        require:true
    }, 

    Nombreapartamento: {
        type: String,
        require:true
    }, 

    Nombrecuarto: {
        type: String,
        require:true
    },
    
    Nombres: {
        type: String,
        require:true
    }, 

    Apellidos: {
        type: String,
        require:true
    },  
    
    Usuario: {
        type: String,
        require:true
    }, 

    Psw: {
        type: String,
        require:true
    }, 

},

{
timestamps: true
},

);

module.exports = model('personas',personaSchema);



