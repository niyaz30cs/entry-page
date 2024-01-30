const userRouter=require("express").Router();
const { register, login } = require("../controller/userController");
let sandbox=[];
userRouter.post("/register",register);
userRouter.post("login",login);

userRouter.post("/sandbox",(req,res)=>{
    const{code}=req.body;
    sandbox.push({username:req.user.username,code});
    res.json({message:"Code Executed Successfully"})
});

userRouter.get("/home",(req,res)=>{
    const userSandboxes=sandbox.filter(s=>s.username===req.user.username);
    res.json(userSandboxes);
})

module.exports=userRouter;