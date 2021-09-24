<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const uri = `mongodb+srv://xer_app2:${process.env.DB_PASSWORD}@cluster0.gialc.mongodb.net/ExerciseTracker?retryWrites=true&w=majority`;

mongoose.connect(
	uri,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	() => {
		console.log("Database connected successfully!");
	}
);
=======
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require("cors")



const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6dtmr.mongodb.net/ExerciseTracker?retryWrites=true&w=majority`


mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true},(error)=>{ 
    if(error){
        console.log(error)
    }
    else{
        console.log("Database connected successfully!");
    }
    
})


>>>>>>> be380f72368fa7069d8ff2dce718d5e7e7accbdc

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

<<<<<<< HEAD
//routes middlewares
// const authRouter = require("./routes/auth.js");
// const userRouter = require("./routes/user.js")
// const categoryRoutes = require("./routes/category.js")
// const productRoutes = require("./routes/product.js")
// const paymentRoutes = require("./routes/payment.js")
// app.use("/api",authRouter)
// app.use("/api",userRouter)
// app.use("/api",categoryRoutes)
// app.use("/api",productRoutes)
// app.use("/api",paymentRoutes)
=======
//routes middlewares 
const authRouter = require("./routes/auth.js");
const userRouter = require("./routes/user.js")

app.use("/api",authRouter)
app.use("/api",userRouter)
>>>>>>> be380f72368fa7069d8ff2dce718d5e7e7accbdc

app.get("/", (req, res) => {
	res.end("chalu h loveday!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started and running on port ${port}`);
});