import express from "express"
import dotenv from "dotenv";
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

// unfixed error here
// app.use('/a', import from ('./routes/index.js'));
// app.use('/a', require('./routes/index'));
// import appRouter from '../routes/index';
// app.use('/a', appRouter);

import app from "./app.js"
import {connectToDatabase} from './db/connection.js'

import app from "./app.js"
import {connectToDatabase} from './db/connection.js'


app.get("/a",(req,res) => {
  console.log(req.body);
  res.send("index.js get")
})

app.listen(port, () => console.log('Server started on port ' + port))
const PORT = process.env.PORT || 3000
connectToDatabase().
  then(() => { 
    app.listen(PORT, () => {
      console.log("Server on 3000 and connected to DB")
    })
    
})
.catch((error) => {
  console.log(error)
})


