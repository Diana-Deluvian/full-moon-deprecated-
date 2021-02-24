require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split("")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded){
                next();
            } else {
                return next({
                    status: 401,
                    message: "Please log in first!"
                });
            }
        });
    } catch(err) {
        return next({
            status: 401,
            message: "Please log in first!"
        });
    }

}

exports.authenticateUser = function(req, res, next) {
    try {
        const token = req.headers.authorization.split("")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded && decoded.id === req.params.id){
                next();
            } else {
                return next({
                    status: 401,
                    message: "You aren't authorized to do that."
                });
            }
        });
    } catch(err) {
        return next({
            status: 401,
            message: "You aren't authorized to do that."
        });
    }

}
