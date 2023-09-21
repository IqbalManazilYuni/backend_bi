import Pelanggaran from "../models/PelanggaranModel.js";

export const getPelanggarans = async (req, res) =>{
    try {
        const pelanggarans = await Pelanggaran.find();
        res.json(pelanggarans);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getPelanggaransById = async (req, res) =>{
    try {
        const pelanggaran = await Pelanggaran.findById(req.params.id);
        res.json(pelanggaran);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const savePelanggaran = async (req, res) =>{
    const pelanggaran = new Pelanggaran(req.body);
    try {
        const insertpelanggaran = await pelanggaran.save()
        res.status(201).json(insertpelanggaran);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
      
}

export const updatePelanggaran = async (req, res) =>{
    try {
        const updatedpelanggaran = await Pelanggaran.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json(updatedpelanggaran);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const deletePelanggaran = async (req, res) =>{
    try {
        const deletedpelanggaran = await Pelanggaran.deleteOne({_id:req.params.id});
        res.status(200).json(deletedpelanggaran);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
