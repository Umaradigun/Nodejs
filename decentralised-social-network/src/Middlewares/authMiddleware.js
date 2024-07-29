const jwt = require ('jsonwebtoken')

const authenticateToken = (req,res, next) => {
    req.headers['authorization'];

    const token = authHeader && authHeader.split('')[1];

    if (token == null) return res.status(401).send('invalid Token');

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if (err) return res.status(403).send('invalid token');
        req.user = user;

        next()
    })
} 

module.exports = authenticateToken;