require("./db/connection"); //Run's database connection immediately
const express = require("express");
const userRouter = require("./user/routes");
const app = express();

//Tell entire server that it will always recieve JSON, and to always send back JSON
app.use(express.json()); 
app.use(userRouter);

app.listen(5001, () => {
  console.log("Listening on port 5001");
});

// Use 'node src/server.js' to run app