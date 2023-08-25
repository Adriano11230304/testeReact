const { User } = require('../models/User');
const dir = require('../dirname');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');


class UserController{

    async userAuth(req, res){
        
        const user = await User.findOne({where: {
                    email: req.body.email
        }});

        if (user && await bcrypt.compare(req.body.password, user.password)){
            const token = jwt.sign({
                data: user.id
            }, 'adriano', { expiresIn: '360d' });

            res.json({
                "token": token,
                "user": user
            });
        }else{
            res.json("Usuário não cadastrado no sistema, verifique suas credenciais!")
        }
    }

    async list(req, res){
        res.end("OK");
    }
}

module.exports = UserController;
