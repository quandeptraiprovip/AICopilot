import { configGPT } from '../config/gpt-config.js';
import { OpenAIApi} from "openai";

import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());


export const generateChat = async (req, res, next) => {
	const { message } = req.body;

	try {
			
		const user = await User.findById(res.locals.jwtData.id);
		if(!user) {
			return res.status(401).json({message: "User not registered or token not found"})
		}

		//Take chats from user object and push the new chat
		const chats = user.chats.map(({role, content}) => ({role, content}));
		chats.push({role: "user", content: message});
		user.chats.push({role: "user", content: message});

		//Send the chat to the AI model
		const config = configGPT();
		const openai = new OpenAIApi(config);
		//get the response from the AI model
		const response = await openai.createChatCompletion({model: "gpt-3.5-turbo", messages: chats});

		user.chats.push(response.data.choices[0].message);
		await user.save();
		return res.status(200).json({ chats: user.chats});								
	} catch (error) {
		console.log(error);
		return res.status(500).json({message: "Server error"})
	}

}

