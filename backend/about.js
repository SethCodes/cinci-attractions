const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
   id: {
       type: String,
       required: true
   },
    
    tilte: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
     
     content: {
         type: String,
         required: true
     },
     address: {
         type: String,
         required: true
     },
     website: {
        type: String,
        required: true
    }

}, {timestamps: true});

const About = mongoose.model('about', aboutSchema);
module.export = About;


