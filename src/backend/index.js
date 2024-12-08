import express from "express"

// const express = require("express");
import dotenv from "dotenv";
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
// app.use('/a', import ('./routes/index.js'));

app.get("/a",(req,res) => {
  console.log(req.body);
  res.send("anh quan")
})

app.listen(port, () => {
  console.log("running on 3000")
})
