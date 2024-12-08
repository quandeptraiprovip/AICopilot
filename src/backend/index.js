import express from "express"
import dotenv from "dotenv";
const port = process.env.PORT || 3000;

const app = express();

// unfixed error here
app.use(express.json())
// app.use('/a', import from ('./routes/index.js'));
// app.use('/a', require('./routes/index'));
// import appRouter from '../routes/index';
// app.use('/a', appRouter);


app.get("/a",(req,res) => {
  console.log(req.body);
  res.send("index.js get")
})

app.listen(port, () => console.log('Server started on port ' + port))
