import express from 'express'
const app = express()
app.use(express.json)
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)
export default app
