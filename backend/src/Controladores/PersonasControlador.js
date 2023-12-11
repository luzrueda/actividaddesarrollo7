
const DocumentoCtrl = {};

const p = require('../Modelos/Persona');

DocumentoCtrl.getPersonas =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarPersonas = async (req, res) => {
    const { Nombretorre, Nombreapartamento, Nombrecuarto, Nombres, Apellidos, Usuario, Psw } = req.body;

    let control_nombreusuario = [];
    let controltnombreusuario = [];

    control_nombreusuario = await p.find();

    if(control_nombreusuario.length === 0 ){
        const ps = new p({
            Nombretorre:Nombretorre,
            Nombreapartamento:Nombreapartamento,
            Nombrecuarto:Nombrecuarto,
            Nombres:Nombres,
            Apellidos:Apellidos,
            Usuario:Usuario,
            Psw:Psw
        });
        await ps.save();
        res.json({message: 'Usuario registradooo'})
    }

    if(control_nombreusuario.length > 0){
        let guardarnombrest = [];
        for(var i=0; i<control_nombreusuario.length; i++){
            guardarnombrest.push(control_nombreusuario[i]); 
        }

        controltnombreusuario = guardarnombrest.filter(x=>x.Usuario === req.body.Usuario);
        if(controltnombreusuario.length>0 ){
            res.json({message:'Nombre usuario repetido'})
        }

        if(controltnombreusuario.length === 0 ){
            const ps = new p({
                Nombretorre:Nombretorre,
                Nombreapartamento:Nombreapartamento,
                Nombrecuarto:Nombrecuarto,
                Nombres:Nombres,
                Apellidos:Apellidos,
                Usuario:Usuario,
                Psw:Psw
            });
            await ps.save();
            res.json({message: 'Usuario registrado'})
            
        }

    }
}


DocumentoCtrl.getPersona = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarPersona = async (req, res) => {
    const { Nombretorre, Nombreapartamento, Nombrecuarto, Nombres, Apellidos, Usuario, Psw } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Nombretorre,
            Nombreapartamento, 
            Nombrecuarto, 
            Nombres, 
            Apellidos, 
            Usuario, 
            Psw 
 }
 );           
res.json({message: 'Apartamento Actualizado'})
}

DocumentoCtrl.deletepersona = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Persona Eliminada'})
}

module.exports = DocumentoCtrl;




