import app from "./app.js"
import {connectToDatabase} from './db/connection.js'


app.get("/a",(req,res) => {
  console.log(req.body);
  res.send("anh quan")
})

const PORT = process.env.PORT || 5000
connectToDatabase().
  then(() => { 
    app.listen(PORT, () => {
      console.log("Server on 5000 and connected to DB")
    })
    
})
.catch((error) => {
  console.log(error)
})


