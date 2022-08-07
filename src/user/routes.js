const { Router } = require("express");
const userRouter = Router();
const { hashPass, 
    comparePass, 
    tokenCheck 
} = require("../middleware");
const { 
    createUser, 
    readUser, 
    findID, 
    updateUser, 
    deleteUser, 
    deleteselUser,
    login
    // findUser, 
    // deleteID 
} = require("./controllers");

userRouter.post("/user", hashPass, createUser);
userRouter.post("/login", comparePass, login);
userRouter.get("/login", tokenCheck, login);
userRouter.get("/user", readUser);
userRouter.get("/user/:id", findID);
userRouter.patch("/user/:id", updateUser);
userRouter.delete("/user", deleteUser);
userRouter.delete("/user/:username", deleteselUser);

// userRouter.get("/user/:username", findUser);
// userRouter.delete("/user/:id", deleteID);

module.exports = userRouter;