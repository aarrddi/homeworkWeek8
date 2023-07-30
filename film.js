const express = require ('express');
const app = express();
const pool = require('./queries.js');
const film = require('./routes/dvdrental.js');


pool.connect(()=>{
    console.log('database connected')
});

app.use('/film',film);



app.listen(3000);