const express = require('express');
const router = express.Router();
const pool = require('../queries.js');

router.get('/',(req,res)=>{
    pool.query('SELECT * from actor',(error,results)=>{
        if(error){
            throw error
        } else {
            res.json(results.rows)
        }
    });
});

router.get('/',(req,res)=>{
    pool.query('SELECT * from film',(error,results)=>{
        if(error){
            throw error
        } else {
            res.json(results.rows)
        }
    });
});

router.get('/',(req,res)=>{
    pool.query('SELECT * from category',(error,results)=>{
        if(error){
            throw error
        } else {
            res.json(results.rows)
        }
    });
});

module.exports =router;