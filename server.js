const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require("./models/Blog");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const dbURI = "mongodb+srv://KableAcademy:Kable@cluster4.9l4dq.mongodb.net/cinci-attractions?retryWrites=true&w=majority";

//json parse
app.use(cors());
app.use(express.json());

//routes
const blogRoutes = require('./routes/Blogs');
const loginRoutes = require('./routes/login');
const contactsRoutes = require('./routes/contacts');
app.use('/blogs', blogRoutes);
app.use('/login', loginRoutes);
app.use('/contact', contactsRoutes)
// //home route
// app.get('/', (req, res) => {
//   Blog.find()
//   .then((blog) => {
      
//     const response = res.json(blog);
//     console.log(response);
//   })
//   .catch(err => console.log(err));
// });


//db connection
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(port, 'localhost', () => {
  console.log('listening for request on port 5000');
}))
.catch((err) => console.log(err));



const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB has been connected");
});


// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});



