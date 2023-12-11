
const { Schema, model } = require('mongoose');

const cuartosSchema = new Schema({

    Nombrecuarto: {
        type: String,
        require:true
    },
    
    Nombreapartamento: {
        type: String,
        require:true
    }   

},

{
timestamps: true
},

);

module.exports = model('cuartos', cuartosSchema);

