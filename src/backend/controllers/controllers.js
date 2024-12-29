// this goes to routes\index.js
const getGoals = (req, res) => {    
    res.status(200).json({message: "routes/index.js get"})
}

const postGoals= (req, res) => {
    console.log(req.body);
    
    res.status(200).json({message: "routes/index.js post"})
}

const putGoals = (req, res) => {
    res.status(200).json({message: "routes/index.js put ${req.params.id}"})
}

const deleteGoals = (req, res) => {
    res.status(200).json({message: "routes/index.js delete ${req.params.id}"})
}

module.exports = {
    getGoals, postGoals, putGoals, deleteGoals
}