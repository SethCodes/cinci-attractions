const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const dbURI = "mongodb+srv://KableAcademy:Kable@cluster4.9l4dq.mongodb.net/cinci-attractions?retryWrites=true&w=majority";


app.use(cors());
app.use(express.json());
const blogRoutes = require('./routes/Blogs');
app.use('/blogs', blogRoutes);

const EventRoutes = require('./routes/Event');
app.use('/Event', EventRoutes);




mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(port, 'localhost', () => {
  console.log('listening for request on port 5000');
}))
.catch((err) => console.log(err));



const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB has been connected");
});






