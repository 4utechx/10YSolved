const express = require("express");
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const router=express.Router();
app.use(router);

require("./server/db/db");
const {postrailwayData, getrailwayData} = require("./server/db/dbController"); 

// const path = require("path");

let port= 3000 || process.env.port;

router.post("/railQuestion", postrailwayData);
router.get("/railQuestions", getrailwayData);



app.get("/", (req, res)=>{
    res.send("Hello from 10YSolved");
}); 


app.listen(port, ()=>{
    console.log(`listing to the port ${port}`);
})
