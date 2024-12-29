import jwt from 'jsonwebtoken'
import { COOKIE_NAME } from './constants.js';

//payload will have id and email (string) and expires in
export const createToken = (id, email) => {
	const payload = { id, email}
	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: "7d"
	})
	return token;
}

export const verifyToken = async (req, res,next) => { 
	const token = req.signedCookies[`${COOKIE_NAME}`];
	if (!token || token.trim() === "") {
		return res.status(401).json({message: "Token not found"})
	}
	return new Promise((resolve, reject) => {
		return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
			if (err) {
				res.status(401).send({error: "Unauthorized"})
				reject(err)
				return res.status(401).json({message: "Token expired"})
			} else {
					console.log("Token verified")
					resolve();
					res.locals.jwtData = success;
					return next();
			}
	})
	})
}