const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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

}, {timestamps: true} )

const Blog = mongoose.model('blog', aboutSchema);
module.export = Blog;



