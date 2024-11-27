const express = require('express')

const PORT = 3000

const app = express()

app.get('/healthy', (req, res) => {
    res.sendStatus(200)
})

app.get('/', (req, res) => {
    res.send('Hola desde CodeSpace Academy con Cristiaanromero dando el taller!')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})