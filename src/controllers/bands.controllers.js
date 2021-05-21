
//ESTO ES EL SERVIDOR

const bandsController = {};

const Band = require("../models/bands");

bandsController.getBands = async (req, res) => {
    const bands = await Band.find();
    res.json(bands);
};

bandsController.getBand = async (req, res) => {
    console.log(req.params);

    // Band.findOne({id: req.params.id});
    const band = await Band.findById(req.params.id);
    res.send(band)
};

bandsController.addBand = async (req, res) => {
    const newBand = new Band(req.body);
    await newBand.save();

    console.log(newBand);
    res.send({Mensaje: "Banda creada"});
};

bandsController.deleteBand = async (req, res) => {
    await Band.findByIdAndDelete(req.params.id);
    res.send("Banda borrada")
};

bandsController.editBand = async(req, res) => {
    await Band.findByIdAndUpdate(req.params.id, req.body);

    res.send("Banda actualizada")

};

module.exports = bandsController;