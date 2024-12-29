import { Router  } from 'express';
import { verifyToken } from '../utils/token.js';
import { chatCompletionValidator, validate } from '../utils/validators.js';
import { generateChat } from '../controllers/chat-controllers.js';

const chatRoutes = Router();
chatRoutes.post("/chat",validate(chatCompletionValidator),verifyToken, generateChat)

export default chatRoutes;