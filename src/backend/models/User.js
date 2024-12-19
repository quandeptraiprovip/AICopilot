import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const chatSchema = new mongoose.Schema({
	chatId: {
		type: String,
		default: randomUUID()
	},
	role: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now()
	}
})
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	chats: [chatSchema]

})

export default mongoose.model('User', userSchema)