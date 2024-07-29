const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const web3 = require('../web3/blockchain');

//Mock database 
let users = [];

exports.register = async (req,res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    users.push({username,password:hashedPassword});
    res.status(201).json({message:'user registered'});
}

exports.login = async(req,res) => {
    const {username,password} = req.body;
    const user = users.find(user => user.username === username);
    if (!user || !(await bcrypt.compare(password,user.password))){
        res.status(403).send({mesaage:'Invalid credentilas'});
    }
    const accessToken =  jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken});
};