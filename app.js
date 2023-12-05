require('dotenv').config()
const express = require ('express')
const morgan = require('morgan')
const routes = require('./src/routes/index')
const app = express()
const port = process.env.PORT || 3002

app.use(express.json()) //Vamos a recibir bodies tipo JSon, nuestro backend Api rest
app.use(morgan('dev'))

app.get('/', (req, res) =>{
    res.send("ok")
})

app.use('/', routes)

app.listen(port, ()=>{
    console.log('Server is listening in port ' + port)
})