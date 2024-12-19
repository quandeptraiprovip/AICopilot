import User from "../models/user.js"

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
