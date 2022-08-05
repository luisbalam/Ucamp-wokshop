
require('dotenv').config()

const staff= require('./db/staff')

//const http = require('http')
// importar los datos de mi base de datos

//1. instanciar express
const express = require('express')

//2. Iniciar express
const app= express()

//3. Utilizar Express ----START-----

//Middleware

app.use(express.json())

// routes
app.get('/staff', (req, res) => {
    res.send(staff)
})

// Server

app.listen(process.env.PORT, () => {
    console.log('El servidor esta arriba!!!')
})
