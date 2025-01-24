// express installed 
//nodemon 
//morgan 
//dotenv
//mongoose 
//jwt
//joi
//bcryt
//cors
import express from "express"
import 'dotenv/config'
import morgan from "morgan"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js"
import cors from "cors";

const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
//mongo db connection 
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("mongodb connected");
    
    
}).catch((err)=>{
    console.log("error" , err);
    
})


//middlewares
app.use(morgan('tiny'))
app.use(cors({
    origin: "*", // Allow frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.options("*", cors()); // Handle preflight requests
// auth routes 
app.use("/auth" , authRoutes)




app.get("/" , (req,res)=>{
    res.status(200).send("working on get req")
})

app.post("/" , (req,res)=>{
    const{email} = req.body
    res.status(201).send({data : email , msg : "Working on post api "})
})



app.listen(PORT , ()=>{
    console.log("running on port ");
    
})