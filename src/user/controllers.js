const jwt = require("jsonwebtoken");
const User = require("./model");

// CREATE
// POST http://localhost:5001/user 
// JSON CONTENT {"username":"content", "email":"content", "password":"content"}
exports.createUser = async (req, res) => {

  try {

    const newUser = await User.create(req.body);

    const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET); 
    //create token with user._id inside
    //generate token using newUser._id

    console.log(newUser);
    //send success message and token back in the response
    res.send({ msg: "User is created", token });

  } catch (error) {

    console.log(error);
    res.send({ err: error });

  }
};

//LOGIN
// POST http://localhost:5001/login
// JSON CONTENT {"username":"content", "password":"content"}
exports.login = async (req, res) => {

  try {

    const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
    res.send({ msg: "Credentials checked and passed", token });

  } catch (error) {

    console.log(error);
    res.send({ err: error });
    
  }
};



// READ ALL
// GET http://localhost:5001/user 
exports.readUser = async (req, res) => {

  try {

    const listUsers = await User.find({});
    // console.log(listUsers); --> reveals users email and password 

    const list = listUsers.map((u) => { // conceal users email and password 

      return u.username;

    });
    console.log(list);


    res.send({ msg: "Users are listed" });

  } catch (error) {

    console.log(error);
    res.send({ err: error });

  }
};

// READ BY ID
// GET http://localhost:5001/user/ID#
exports.findID = async (req, res) => {

  try {

    const specID = await User.findById({_id: req.params.id});
    console.log(specID);
    res.send({ msg: "Your ID was selected" });

  } catch (error) {

    console.log(error);
    res.send({ err: error });

  }

};


// UPDATE BY ID
// PATCH http://localhost:5001/user/ID#
// JSON CONTENT {"username":"updated content", "email":"updated content", "password":"updated content"}
exports.updateUser = async (req, res) => {

  try {

    const editUser = await User.findByIdAndUpdate({_id: req.params.id}, {$set: {username:req.body.username, email:req.body.email, password:req.body.password}});
    console.log(editUser);
    res.send({ msg: "This user has been updated" });

  } catch (error) {

      console.log(error);
      res.send({ err: error });
  
  }
};

// DELETES LAST MODIFIED USER ONLY
// DELETE http://localhost:5001/user
exports.deleteUser = async (req, res) => {

  try {

    const delUser = await User.deleteOne(req.body);
    console.log(delUser);
    res.send({ msg: "Last modified user has been deleted" });

  } catch (error) {

      console.log(error);
      res.send({ err: error });
  
  }
};

// DELETE BY USER
// DELETE http://localhost:5001/user/username
exports.deleteselUser = async (req, res) => {

  try {

    const delSelUser = await User.deleteOne({username: req.params.username});
    console.log(delSelUser);
    res.send({ msg: "Selected user has been deleted" });

  } catch (error) {

      console.log(error);
      res.send({ err: error });
  
  }
};


// // READ BY USER
// // GET http://localhost:5001/user/username
// exports.findUser = async (req, res) => {

//   try {

//     const specUser = await User.findOne({username: req.params.username});
//     console.log(specUser);
//     res.send({ msg: "User was selected" });

//   } catch (error) {

//     console.log(error);
//     res.send({ err: error });

//   }

// };

// // DELETE BY USER ID
// // DELETE http://localhost:5001/user/ID#
// exports.deleteID = async (req, res) => {

//   try {

//     const delId = await User.findByIdAndDelete({_id: req.params.id});
//     console.log(delId);
//     res.send({ msg: "Selected ID has been deleted" });

//   } catch (error) {

//       console.log(error);
//       res.send({ err: error });
  
//   }
// };
