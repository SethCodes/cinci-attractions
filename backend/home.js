const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
   id: {
       type: String,
       required: true
   },
    
    title: {
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

}, {timestamps: true})

const Home = mongoose.model('home', homeSchema);
module.export = Home;