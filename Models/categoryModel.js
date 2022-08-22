const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const categorySchema = new Schema({
    petCategory:{
        type: String,
        required: [true, 'Main category is required']
    },
    mainCategory:{
        type: String,
        required: [true, 'Main category is required']
    },

    subCategory:{
        type: String,
        required: [true, 'Sub category is required']
    }
})


module.exports = mongoose.model('Category', categorySchema);