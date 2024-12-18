import { router} from 'express';
import { getAllUsers } from '../controllers/user-controllers.js';

const userRoutes = router();

userRoutes.get("/", getAllUsers)

export default userRoutes;