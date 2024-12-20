import jwt from 'jsonwebtoken'

//payload will have id and email (string) and expires in
export const createToken = (id, email) => {
	const payload = { id, email}
	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: "7d"
	})
	return token;
}