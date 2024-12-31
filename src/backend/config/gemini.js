import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = "Explain how AI works";
const result = await model.generateContent(prompt);
const response = await result.response.text;
console.log(response);

export default model;