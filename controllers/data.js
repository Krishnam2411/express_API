const data = require('../models/data');

const getAll = async (req,res)=>{
    try{
        const response = await data.find();
        res.json(response);
    } catch (error) {
        res.json ({
            message : error.message
        })
    }
}
const getData = async (req,res)=>{
    try{
        const response = await data.find({roll: req.params.id}).exec();
        res.json(response);
    } catch (error) {
        res.json ({
            message : error.message
        })
    }
}
const createData = async (req,res)=>{
    const info = new data({
            name: req.body.name,
            roll: req.body.roll
        })
    try {
        // const response = data.find({roll: info.roll}).exec();
        const newinfo = await info.save()
        res.status(201).json(info)
    } catch (error){
        res.status(400).json(error.message)
    }
}
const deleteData = async (req,res)=>{
    try {
        const response = await data.findOneAndRemove({roll: req.params.id});
        res.json(`${response.name}'s data has been deleted successfully`);
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}
const updateData = async (req,res) => {
    try {
        const id = req.params.id;
        const newName = req.body.name;
        const result = await data.findOneAndUpdate({roll: req.params.id}, {name: newName}).exec();
        res.send(`${result.name} has been changed to ${newName}`);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {getAll, getData, createData, deleteData, updateData};