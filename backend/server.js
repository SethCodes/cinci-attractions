const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const dbURI = "mongodb+srv://KableAcademy:Kable@cluster4.9l4dq.mongodb.net/cinci-attractions?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(port, 'localhost', () => {
  console.log('listening for request on port 3000');
}))
.catch((err) => console.log(err));


app.use(cors());
app.use(express.json());

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB has been connected");
});

app.get('/', (req, res) => {
    res.send("works");
});


app.listen(port, 'localhost', () => {
  console.log('listening for request on port 3000');
});




