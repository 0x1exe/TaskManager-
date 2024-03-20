const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("../starter_files/middleware/notFound");
const errorHandler = require("../starter_files/middleware/errorHandler");

require("dotenv").config();

const server = express();

//middleware
server.use(express.static("./public"));
//server.use(notFound);
server.use(errorHandler);
server.use(express.json());

//Router set-up
server.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

server.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
