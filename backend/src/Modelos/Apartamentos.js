
const { Schema, model } = require('mongoose');

const apartamentosSchema = new Schema({
    
    Nombreapartamento: {
        type: String,
        require:true
    }, 
    
    Nombretorre: {
        type: String,
        require:true
    }    

},

{
timestamps: true
},

);

module.exports = model('apartamentos', apartamentosSchema);

