import { Router } from "express"

const appRouter = Router()

const {getGoals, postGoals, putGoals, deleteGoals} = require ('../controllers/controllers.js') 

appRouter.route('/').get(getGoals).post(postGoals)

appRouter.route('/:id').delete(deleteGoals).put(putGoals)

module.exports = appRouter;







appRouter.use("/user")

export default appRouter;