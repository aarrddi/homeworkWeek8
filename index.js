const express = require ('express');
const app = express();
const pool = require('./queries.js');

const actor = require('./routes/dvdrental.js');

pool.connect(()=>{
    console.log('database connected')
});

app.use('/actor',actor);



app.listen(3000);