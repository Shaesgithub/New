const User = require("./model");

// CREATE
// POST http://localhost:5001/user 
// JSON CONTENT {"username":"content" "email":"content" "password":"content"}
exports.createUser = async (req, res) => {

  try {

    const newUser = await User.create(req.body);
    console.log(newUser);
    res.send({ msg: "User is created" });

  } catch (error) {

    console.log(error);
    res.send({ err: error });

  }
};

// READ ALL
// GET http://localhost:5001/user 
exports.readUser = async (req, res) => {

  try {

    const listUsers = await User.find();
    console.log(listUsers);
    res.send({ msg: "Users are listed" });

  } catch (error) {

    console.log(error);
    res.send({ err: error });

  }
};

// READ BY ID
// GET http://localhost:5001/user/ID#
exports.findUser = async (req, res) => {

  try {

    const specUser = await User.findById(req.params.iD);
    console.log(specUser);
    res.send({ msg: "Your ID was selected" });

  } catch (error) {

    console.log(error);
    res.send({ err: error });

  }

};

// UPDATE BY ID
// PATCH http://localhost:5001/user/ID#
// JSON CONTENT {"username":"updated content" "email":"updated content" "password":"updated content"}
exports.updateUser = async (req, res) => {

  try {

    const editUser = await User.updateOne({_id: req.params.iD}, {$set: {username:req.body.username, email:req.body.email, password:req.body.password}});
    console.log(editUser);
    res.send({ msg: "This user has been updated" });

  } catch (error) {

      console.log(error);
      res.send({ err: error });
  
  }
};

// DELETE LAST USER
// DELETE http://localhost:5001/user
exports.deleteUser = async (req, res) => {

  try {

    const delUser = await User.deleteOne(req.body);
    console.log(delUser);
    res.send({ msg: "Last user has been deleted" });

  } catch (error) {

      console.log(error);
      res.send({ err: error });
  
  }
};

