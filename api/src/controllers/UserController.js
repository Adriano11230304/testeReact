const { User } = require('../models/User');
const dir = require('../dirname');
const jwt = require('jsonwebtoken');


class UserController{

    async userAuth(req, res){
        const token = jwt.sign({
            data: '1'
          }, 'adriano', { expiresIn: '360d' });

        res.json(token);
    }

    async list(req, res){
        res.end("OK");
    }
}

module.exports = UserController;