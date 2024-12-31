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

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export { connectToDatabase, disconnectFromDatabase }