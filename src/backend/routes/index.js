import { Router } from "express"

const appRouter = Router()


appRouter.get("/", (req, res) => {
  res.status(200).json({message: "routes/index.js get"})
})

appRouter.post("/:id", (req, res) => {
    res.status(200).json({message: "routes/index.js post"})
})

appRouter.put("/:id", (req, res) => {
    res.status(200).json({message: "routes/index.js put ${req.params.id}"})
})

appRouter.delete("/", (req, res) => {
    res.status(200).json({message: "routes/index.js delete ${req.params.id}"})
})
module.exports = appRouter;







appRouter.use("/user")

export default appRouter;