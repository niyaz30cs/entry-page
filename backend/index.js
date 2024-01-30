const express=require("express");
const connection = require("./config/connection");
const port=3030;
const cookieParser=require("cookie-parser");
const cors=require("cors");
const userRouter = require("./router/userRoute");

const app=express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cookieParser(""));

app.use(cors({
    origin:"*"
}))

app.use("/user",userRouter)

app.use("/sand",userRouter);

app.use("/home",userRouter);

app.listen(port,()=>{
    try {
        connection();
        console.log(`Server Run on Port No-${port}`);
    } catch (error) {
        console.log(`Some Error on Port No-${port}`);
    }
})