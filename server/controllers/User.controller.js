const UserModel = require("../models/User.model");

class UserController {
    async getOne(req, res) {
        try {
            const id = req.params;
            const findUserById = UserModel.findOne({ where: { id, }, });

            if (!findUserById) {
                return res.status(404).json({ message: "Такого пользователя не существует", status: 404, exist: false, });
            }

            return res.status(200).json({ message: "Такой пользователь существует", status: 200, exist: true, });
        } catch (err) {
            console.log(err);

            return res.status(500).json({ message: "Произошла ошибка сервера", status: 500, });
        }
    }
}

module.exports = new UserController();