const express = require('express');
const app = express();
const apiRouter = require('./src/routes');

app.use('/api', apiRouter)

app.listen(5000, ()=>{
    console.log("server is running successfully on port 5000")
})