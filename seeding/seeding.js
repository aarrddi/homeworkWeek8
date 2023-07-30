const { log, error } = require('console');
const pool = require('../queries.js');
const fs = require ('fs');

const seedQuery = fs.readFileSync('seeding/seeding.sql', {encoding: 'utf-8'});


pool.query(seedQuery,(err,result)=>{
    if(err){
        throw error
    }
    console.log(res);
    console.log('seeding complete');
    pool.end();
})