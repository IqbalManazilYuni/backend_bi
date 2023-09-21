import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"
import PelanggaranRoute from "./routes/PelanggaranRoute.js"

const app = express();

//make connet to mongodb
mongoose.connect('mongodb+srv://admin:admin1234@belajar-js.cemc4an.mongodb.net/belajar',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>console.log('Database connected'));
//use cors for midleware
app.use(cors());
//use json
app.use(express.json());
app.use(UserRoute);
app.use(PelanggaranRoute);

app.listen(5000,()=>console.log('Server running on port 5000'));