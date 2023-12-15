const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User.controller");

router.get("/:id", UserController.getOne);

module.exports = router;