
const { Schema, model } = require('mongoose');

const torresSchema = new Schema({
    
    Nombretorre: {
        type: String,
        require:true
    },   

},

{
timestamps: true
},

);

module.exports = model('torres', torresSchema);

