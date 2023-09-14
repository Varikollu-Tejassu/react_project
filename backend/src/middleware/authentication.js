const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

dotenv.config();
const jwt = require('jsonwebtoken');
const verifyuser = async (req, res, next) => {
    const token = await req.cookies.token;
    console.log("hhhh",token)
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');

    }
    else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            }
            else {
                req.email = decoded.email
                next()
                
            }
        })
    }
}

module.exports = { verifyuser }