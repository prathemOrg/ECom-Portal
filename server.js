import saveUser from './controller/userController';
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT|| 5000
app.use(cors())

app.use(express.json());
app.use('/register', saveUser);

const uri = process.env.DB_URI;
console.log(uri)
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully running on Port 5000");
})
app.listen(port,()=>{'server is listening on port',port});
