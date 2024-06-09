import { Router } from "express"

const router = Router();

//Usuarios

let users=[];
router.get("/api/users",(req,res)=>{
    res.status(200).json(users)
})

router.post("/api/users",(req,res)=>{
    const user=req.body;
    users.push(user);
    res.status(201).json({status:"success",msg:"Usuario guardado"});
})


export default router;