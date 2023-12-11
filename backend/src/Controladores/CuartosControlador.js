
const DocumentoCtrl = {};

const p = require('../Modelos/Cuartos');
const per = require('../Modelos/Persona');

DocumentoCtrl.getCuartos =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarCuarto = async (req, res) => {
    const { Nombreapartamento, Nombrecuarto } = req.body;

    let control_nombrecuarto = [];
    let controltnombrecuarto = [];

    control_nombrecuarto = await p.find();

    if(control_nombrecuarto.length === 0 && (req.body.Nombrecuarto).length>0){
        const ps = new p({
            Nombreapartamento:Nombreapartamento,
            Nombrecuarto:Nombrecuarto
        });
        await ps.save();
        res.json({message: 'Cuarto registradooo'})
    }

    if(control_nombrecuarto.length > 0){
        let guardarnombrest = [];
        for(var i=0; i<control_nombrecuarto.length; i++){
            guardarnombrest.push(control_nombrecuarto[i]); 
        }

        controltnombrecuarto = guardarnombrest.filter(x=>x.Nombrecuarto === req.body.Nombrecuarto);
        if(controltnombrecuarto.length>0 || (req.body.Nombrecuarto).length === 0){
            res.json({message:'Nombre cuarto repetido o invalido'})
        }

        if(controltnombrecuarto.length === 0 && (req.body.Nombrecuarto).length > 0){
            const ps = new p({
                Nombreapartamento:Nombreapartamento,
                Nombrecuarto:Nombrecuarto
            });
            await ps.save();
            res.json({message: 'Cuarto registrado'})
        }

    }
}


DocumentoCtrl.getCuarto = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarCuarto = async (req, res) => {
    const { Nombreapartamento, Nombrecuarto } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Nombreapartamento, 
            Nombrecuarto  
 }
 );           
res.json({message: 'Cuarto Actualizado'})
}

DocumentoCtrl.deletecuarto = async (req, res) => {

    let control_borrado = [];
    let cuartoss = [];

    control_borrado = await per.find();
    cuartoss = await p.find();

    if(control_borrado.length === 0 ){
        await p.findByIdAndDelete(req.params.id);   
        res.json({message: 'Cuarto Eliminadooo'})
    }

    if(control_borrado.length > 0 ){
        let guardar = [];
        let cont = 0;

        guardar.push(await p.findById(req.params.id));
        
        for(var j = 0; j<control_borrado.length; j++){
        for(var i=0; i<cuartoss.length; i++){
        if(control_borrado[j].Nombrecuarto === cuartoss[i].Nombrecuarto && cuartoss[i].Nombrecuarto === guardar[0].Nombrecuarto){
        cont = cont+1
        }
        }
        }

        if(cont>0){
        res.json({message: 'El cuarto posee personas'})    
        }

        if(cont === 0){
            await p.findByIdAndDelete(req.params.id);   
            res.json({message: 'Cuarto Eliminado'})   
        }
        
    }

}

module.exports = DocumentoCtrl;




