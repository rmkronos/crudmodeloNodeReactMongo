const express =  require('express');
const bodyParser = require("body-parser");
const dontenv  = require("dotenv");
const mongoose = require("mongoose");
const route = require('./routes/userRoute');


const app = express();
app.use(express.json());
app.use(bodyParser.json());

dontenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(()=>{
        console.log("DataBase conectado ao Server com sucesso!");
    app.listen(PORT, ()=>{
        console.log(`Servidor em execução na porta ${PORT}`);        
    })    
})
.catch((error)=>{
    console.log("Errosr",error);
    
}) 

//maddlewares
app.use('/api', route);