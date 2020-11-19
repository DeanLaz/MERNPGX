const uuid = require("uuid/v4");

const HttpError = require("../models/http-error");

const USERS = [
  {
    id: "u1",
    name: "Dean",
    email: "DeanLazx@gmail.com",
    password: "TEST",
  },
];

const getUsers = (req, res, next) => {
  res.status({ users: USERS });
};
const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = USER.find((u) => u.email === email);
  if (hasUser) {
    throw newHttpError("User Already Exists!", 422);
  }
  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };
  USERS.push(createdUser);
  res.status(201).json({ users: createdUser });
};
const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw newHttpError(
      "Could not identify user, credential seeem to be wrong",
      401
    );
  }
  res.json({ message: "User Logged In!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
