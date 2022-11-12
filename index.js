/* import dependencies */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

/* app initialization */
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/admin', (req,res) =>{
    console.log('user type admin')
    console.log(req.body)
    res.send()
})
app.post('/career-team', (req,res) =>{
    console.log('user type career-team')
    console.log(req.body)
    res.send()
})
app.post('/faculty', (req,res) =>{
    console.log('user type faculty')
    console.log(req.body)
    res.send()
})
app.post('/learners', (req,res) =>{
    console.log('user type learners')
    console.log(req.body)
    res.send()
})

/* server create and port */

app.listen(5050,()=>{
    console.log(`Server is running!`)
})
