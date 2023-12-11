
const DocumentoCtrl = {};

const p = require('../Modelos/Mensajes');

DocumentoCtrl.getMensajes =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarMensajes = async (req, res) => {
    const { Emisor, Receptor, Mensaje  } = req.body;

    const ps = new p({
        Emisor:Emisor,
        Receptor:Receptor,
        Mensaje:Mensaje

    });
    await ps.save();
    res.json({message: 'Mensaje enviado'})
}


DocumentoCtrl.getMensaje = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.deleteMensaje = async (req, res) => {

    await p.findByIdAndDelete(req.params.id);   
    res.json({message: 'Mensaje Eliminadooo'})

}

module.exports = DocumentoCtrl;




