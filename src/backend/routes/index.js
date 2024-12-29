import { Router } from "express"
import userRoutes from "./user-routes.js"
import chatRoutes from "./chat-routes.js" 
const appRouter = Router()

const {getGoals, postGoals, putGoals, deleteGoals} = require ('../controllers/controllers.js') 

appRouter.route('/').get(getGoals).post(postGoals)
appRouter.route('/:id').delete(deleteGoals).put(putGoals)

module.exports = appRouter;







appRouter.use("/user")
appRouter.use("/user", userRoutes) //domain/api/v1/user
appRouter.use("/chat", chatRoutes)

export default appRouter;

