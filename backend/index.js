const express = require('express');
const app = express();
const userRoute = require('./Routes/User');
const registerRoute = require('./Routes/Auth.js');
// var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();  
// Database Connection---
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Daniel:Daniel@daniel.n6l1are.mongodb.net/Ecommerce?retryWrites=true&w=majority ' );
mongoose.connection.on('error', error=>{
  console.log("connection failed");
})
mongoose.connection.on('connected', connected=>{
  console.log("Alhamdulilah connected to the Database");
})
const bodyParser = require('body-parser');
const port = 8000;
var fs = require('fs');
// const uuid = require('uuid');
const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};
// app.use(cors(corsOpts));
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
// ROUTES-----
app.use("/user" ,userRoute )
app.use("/auth" ,registerRoute )



app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});