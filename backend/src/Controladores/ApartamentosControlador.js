
const DocumentoCtrl = {};

const p = require('../Modelos/Apartamentos');
const cto = require('../Modelos/Cuartos')

DocumentoCtrl.getApartamentos =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarApartamento = async (req, res) => {
    const { Nombreapartamento, Nombretorre } = req.body;

    let control_nombreapto = [];
    let controltnombreapto = [];

    control_nombreapto = await p.find();

    if(control_nombreapto.length === 0 && (req.body.Nombreapartamento).length>0){
        const ps = new p({
            Nombreapartamento:Nombreapartamento,
            Nombretorre:Nombretorre
        });
        await ps.save();
        res.json({message: 'Apartamento registradooo'})
    }

    if(control_nombreapto.length > 0){
        let guardarnombrest = [];
        for(var i=0; i<control_nombreapto.length; i++){
            guardarnombrest.push(control_nombreapto[i]); 
        }

        controltnombreapto = guardarnombrest.filter(x=>x.Nombreapartamento === req.body.Nombreapartamento);
        if(controltnombreapto.length>0 || (req.body.Nombreapartamento).length === 0){
            res.json({message:'Nombre apto repetido o invalido'})
        }

        if(controltnombreapto.length === 0 && (req.body.Nombreapartamento).length > 0){
            const ps = new p({
                Nombreapartamento:Nombreapartamento,
                Nombretorre:Nombretorre
            });
            await ps.save();
            res.json({message: 'Apartamento registrado'})
        }

    }
}


DocumentoCtrl.getApartamento = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarApartamento = async (req, res) => {
    const { Nombreapartamento, Nombretorre } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Nombreapartamento, 
            Nombretorre   
 }
 );           
res.json({message: 'Apartamento Actualizado'})
}

DocumentoCtrl.deleteapartamento = async (req, res) => {

    let control_borrado = [];
    let apartamentoss = [];

    control_borrado = await cto.find();
    apartamentoss = await p.find();

    if(control_borrado.length === 0 ){
        await p.findByIdAndDelete(req.params.id);   
        res.json({message: 'Apartamento Eliminadooo'})
    }

    if(control_borrado.length > 0 ){
        let guardar = [];
        let cont = 0;

        guardar.push(await p.findById(req.params.id));
        
        for(var j = 0; j<control_borrado.length; j++){
        for(var i=0; i<apartamentoss.length; i++){
        if(control_borrado[j].Nombreapartamento === apartamentoss[i].Nombreapartamento && apartamentoss[i].Nombreapartamento === guardar[0].Nombreapartamento){
        cont = cont+1
        }
        }
        }

        if(cont>0){
        res.json({message: 'El apartamento posee cuartos'})    
        }

        if(cont === 0){
            await p.findByIdAndDelete(req.params.id);   
            res.json({message: 'Apartamento Eliminado'})   
        }
        
    }

}

module.exports = DocumentoCtrl;




