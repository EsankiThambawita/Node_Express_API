import express from "express";
import bodyParser from "body-parser"; //take in incoming post request bodies

import usersRoutes from "./routes/users.js";

//Initialize the express app
const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //Gonna use json data in the entire application

app.use("/users", usersRoutes);

//Listen to incoming requests
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
); //callback function which is going to be executed once we run the server

//create a route
app.get("/", (req, res) => res.send("Hello from homepage"));
