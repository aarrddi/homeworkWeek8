const express = require ('express');
const app = express();
const pool = require('./queries.js');
const category = require('./routes/dvdrental.js');


pool.connect(()=>{
    console.log('database connected')
});

app.use('/category',category);



app.listen(3000);