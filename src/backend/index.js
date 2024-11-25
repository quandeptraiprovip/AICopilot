import express from "express"

const app = express();

app.use(express.json())

app.get("/a",(req,res) => {
  console.log(req.body);
  res.send("anh")
})

app.listen(3000, () => {
  console.log("running on 3000")
})
