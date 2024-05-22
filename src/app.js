import express from "express";
import userRoutes from "./router/users.routes.js"
import router from "./router/index.routes.js"
import __dirname from "./dirname.js";

//Inicializamos express y la variable app contendra todas las funcionalidades de express
const app = express();
const PORT=8080;

;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

//Routes
app.use("/api",router);
console.log(__dirname);


app.listen(8080, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})


//actividad

/*app.get("/bienvenida",(req, res)=>{
    res.send("Bienvenido a mi primer servidor con express")
})
app.get("/saludo",(req, res)=>{
    res.send("Mi primer respuesta del servidor con express")
})
app.get("/usuario",(req,res)=>{
    const usuario = {
        nombre:"Juan",
        apellido:"Perez",
        edad: 33,
        correo:"jp@gmail.com"
    }
    res.send(usuario);
})*/


//actividad 2 - usuarios

/*const usuarios =[
    {id:1,nombre:"Miguel",apellido:"Castro",edad:54},
    {id:2,nombre:"Juan",apellido:"Perez",edad:53},
    {id:3,nombre:"Pepe",apellido:"Sapo",edad:54},
]

app.get("/" , (req , res)=>{
    res.send(usuarios);
})

app.get("/usuarios/:id", (req,res)=>{
    const {id}=req.params;

    const usuario=usuarios.find(usuario=>usuario.id===Number(id));
    if(!usuario) return res.send(`No se encuentra el usuario con el ID: ${id}`);
    res.send(usuario);
})
*/


//Mascotas

/*let pets=[];
app.get("/api/pets",(req,res)=>{
    res.status(200).json(pets)
})

app.post("/api/pets",(req,res)=>{
    const pet=req.body;
    pets.push(pet);
    res.status(201).json({status:"success",msg:"Mascota guardado"});
})*/