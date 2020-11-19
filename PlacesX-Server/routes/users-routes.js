const express = require("express");

const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post("/signup", usersControllers.signup);

router.patch("/login", usersControllers.login);

module.exports = router;
