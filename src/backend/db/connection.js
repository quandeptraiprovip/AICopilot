import { connect,disconnect } from 'mongoose'


async function connectToDatabase() {
	try {
		 await connect(process.env.MONGODB_URL)
	}
	catch (error){
		console.log(error)
		throw new Error("Cant connect to DB")
	}
}

async function disconnectFromDatabase() {
	try {
			await disconnect();
	} catch (error) {
		console.log(error);
		throw new Error("Could not disconnect")

	}
}

export { connectToDatabase, disconnectFromDatabase }