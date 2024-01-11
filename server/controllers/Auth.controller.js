const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async registration(req, res) {
        try {
            const body = req.body;
            const { password, nickname, } = body;
            const findEqualUserByNickname = await UserModel.findOne({ where: { nickname, }, });

            if (findEqualUserByNickname) {
                return res.status(409).json({ message: "Такой пользователь уже существует!", status: 409, });
            }

            const hashPassword = await bcrypt.hash(password, 7);
            const dataUser = {
                ...body,
                password: hashPassword,
            };

            await UserModel.create(dataUser);

            return res.status(201).json({ message: "Регистрация прошла успешно!", status: 201, });
        } catch (err) {
            console.log(err);

            return res.status(500).json({ message: "Произошла ошибка сервера", status: 500, });
        }
    }

    async login(req, res) {
        try {
            const { nickname, password, } = req.body;
            const findUserByNickname = await UserModel.findOne({ where: { nickname, } });

            if (!findUserByNickname) {
                return res.status(404).json({ message: "Такого пользователя не существует", status: 404, });
            }

            const passwordIsCorrect = await bcrypt.compare(password, findUserByNickname.password);

            if (!passwordIsCorrect) {
                return res.status(409).json({ message: "Неверный пароль!", status: 409, });
            }

            const token = jwt.sign(
                { userId: findUserByNickname.id, },
                process.env.SECRET_KEY,
                { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60), }
            );

            return res.status(200).json({ message: "Вход выполнен успешно!", status: 200, token: `Bearer ${token}`, });
        } catch (err) {
            console.log(err);

            return res.status(500).json({ message: "Произошла ошибка сервера", status: 500, });
        }
    }
}

module.exports = new AuthController();