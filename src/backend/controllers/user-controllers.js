import User from "../models/user.js"
import {hash,compare} from "bcrypt"
import {createToken} from "../utils/token.js"
import {COOKIE_NAME} from "../utils/constants.js"

export const getAllUsers = async (req, res, next) => {
	//get all users
	try {
		//.find gonna find all users
	const users = await User.find()
	return res.status(200).json({message: "All users", users})
	}	

	catch(err) {
		return res.status(500).json({message: "Server error", error: err})
	}

}

export const userSignup = async (req, res, next) => {
	//sign up a user
	try {
	const {email, username, password} = req.body
	const existingUser = await User.findOne({ email })
	if (existingUser) {
		return res.status(401).json({ message: "User already exists" });
	}
	if (!email || !username || !password) {
		return res.status(400).json({ message: "Missing required fields: email, username, password" });
	}
	const hashed = await hash(password, 10)
	const user = new User({
		email,
		username,
		password: hashed
		
	})
	await user.save()

	//Create token and store in cookie
	res.clearCookie(COOKIE_NAME, {
		path: "/", 
		domain: "localhost", 
		httpOnly: true,
		signed: true 
	})

	const token = createToken(user._id.toString(), user.email, "7d")
	const expires = new Date();
	expires.setDate(expires.getDate() + 7);
	res.cookie(COOKIE_NAME, token, {
		path: "/", 
		domain: "localhost", 
		expires,
		httpOnly: true,
		signed: true 
	})

	return res.status(200).json({
		message: "User added", 
		id: user._id.toString() 
	})
}	
	catch(err) {
		console.log(err)
		return res.status(500).json({message: "Server error", error: err})
	}

}

export const userLogin = async (req, res, next) => {
	//sign in for user
	try {
	const {email, password} = req.body
	const user = await User.findOne({
		email
	})
	
	if (!user) {
		return res.status(401).json({ message: "User not registered" });
	}
	const isPasswordMatch = await compare(password, user.password)
	if (!isPasswordMatch) {
		return res.status(401).json({ message: "Incorrect password" });
	}

	res.clearCookie(COOKIE_NAME, {
		path: "/", 
		domain: "localhost", 
		httpOnly: true,
		signed: true 
	})

	const token = createToken(user._id.toString(), user.email, "7d")
	const expires = new Date();
	expires.setDate(expires.getDate() + 7);
	res.cookie(COOKIE_NAME, token, {
		path: "/", 
		domain: "localhost", 
		expires,
		httpOnly: true,
		signed: true 
	})
	return res.status(200).json({ message: "User logged in" , id: user._id.toString() });

}	
	catch(err) {
		console.log(err)
		return res.status(500).json({message: "Server error", error: err})
	}

}