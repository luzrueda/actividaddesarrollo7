
const DocumentoCtrl = {};

const p = require('../Modelos/Torres');
const apto = require('../Modelos/Apartamentos')

DocumentoCtrl.getTorres =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarTorre = async (req, res) => {
    const { Nombretorre } = req.body;

    let control_nombretorre = [];
    let controltnombretorre = [];

    control_nombretorre = await p.find();

    if(control_nombretorre.length === 0 && (req.body.Nombretorre).length>0){
        const ps = new p({
            Nombretorre:Nombretorre
        });
        await ps.save();
        res.json({message: 'Torre registradaaa'})
    }

    if(control_nombretorre.length > 0){
        let guardarnombrest = [];
        for(var i=0; i<control_nombretorre.length; i++){
            guardarnombrest.push(control_nombretorre[i]); 
        }

        controltnombretorre = guardarnombrest.filter(x=>x.Nombretorre === req.body.Nombretorre);
        if(controltnombretorre.length>0 || (req.body.Nombretorre).length === 0){
            res.json({message:'Nombre torre repetido o invalido'})
        }

        if(controltnombretorre.length === 0 && (req.body.Nombretorre).length > 0){
            const ps = new p({
                Nombretorre:Nombretorre
            });
            await ps.save();
            res.json({message: 'Torre registrada'})
        }

    }

}


DocumentoCtrl.getTorre = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarTorre = async (req, res) => {
    const { Nombretorre } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Nombretorre   
 }
 );           
res.json({message: 'Torre Actualizada'})
}

DocumentoCtrl.deleteTorre = async (req, res) => {

    let control_borrado = [];
    let torress = [];

    control_borrado = await apto.find();
    torress = await p.find();

    if(control_borrado.length === 0 ){
        await p.findByIdAndDelete(req.params.id);   
        res.json({message: 'Torre Eliminadaaaaa'})
    }

    if(control_borrado.length > 0 ){
        let guardar = [];
        let cont = 0;

        guardar.push(await p.findById(req.params.id));
        
        for(var j = 0; j<control_borrado.length; j++){
        for(var i=0; i<torress.length; i++){
        if(control_borrado[j].Nombretorre === torress[i].Nombretorre && torress[i].Nombretorre === guardar[0].Nombretorre){
        cont = cont+1
        }
        }
        }

        if(cont>0){
        res.json({message: 'La torre posee apartamentos'})    
        }

        if(cont === 0){
            await p.findByIdAndDelete(req.params.id);   
            res.json({message: 'Torre Eliminada'})   
        }
        
    }
}

module.exports = DocumentoCtrl;



