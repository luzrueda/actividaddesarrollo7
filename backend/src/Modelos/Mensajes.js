
const { Schema, model } = require('mongoose');

const enviomensajesSchema = new Schema({
    
    Emisor: {
        type: String,
        require:true
    }, 
    
    Receptor: {
        type: String,
        require:true
    },   

    Mensaje: {
        type: String,
        require:true
    }

},

{
timestamps: true
},

);

module.exports = model('mensajes', enviomensajesSchema);



