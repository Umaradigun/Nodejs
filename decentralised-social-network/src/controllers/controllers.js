const web3 = require('../web3/blockchain');

//controller for getting users

exports.getUsers = async(req,res) => {
    //logic to retrieve users from blockchain or database
    res.json({message: 'List of users'});
}

//Example controller for creating a post 

exports.createpost = async (req,res) => {
    // Logic to createpost on blockchain 
    res.json({message:'Post created', user,content});
};
