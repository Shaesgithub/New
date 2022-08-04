const { Router } = require("express");
const userRouter = Router();
const { createUser, readUser, findUser, updateUser, deleteUser } = require("./controllers");

userRouter.post("/user", createUser);
userRouter.get("/user", readUser);
userRouter.get("/user/:iD", findUser);
userRouter.patch("/user/:iD", updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;