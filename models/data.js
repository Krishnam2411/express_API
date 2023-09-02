const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('data', dataSchema)