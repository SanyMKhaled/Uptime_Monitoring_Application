/*
Project Name: Uptime Monitoring Application
Author: Sany Mohammad Khaled
Date: 20-06-2022
*/

//Dependencies
const http = require('http');

//Scafolding
const app = {};

//Configuration 
app.config = {
    port:3000,
};

//create Server
app.createServer = ()=>{
    const server = http.createServer(handleRequests);
    server.listen(app.config.port,()=>{
        console.log(`Running on Port ${app.config.port}`);
        
    });

}

//Requests Handling
handleRequests = (req,res)=>{
    res.end('Hello World')
}

//Function Calling
app.createServer();

