const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")

const authRoute = require("./routes/auth");
const weeklistRoute = require("./routes/weeklist");
const tasklistRoute = require("./routes/tasklist")



const app = express();
const PORT = 8001;
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// mongoDB connection
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.log("Error:", error);
  }
};

// mongoDB disconnection
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// health router
app.use("/api/auth", authRoute);
app.use("/api/weeklist", weeklistRoute);
app.use("/api/tasklist", tasklistRoute)



// This route will handle all the requests that are
// not handled by any other route handler. In
// this handler we will redirect the user to
// an error page with NOT FOUND message and status
// code as 404 (HTTP status code for NOT found)
app.all("*", (req, res) => {
  res.status(404).json({
    msg: "route is not matched",
  });
});



app.listen(PORT, () => {
  connect();
  console.log("server started:", PORT);
});
