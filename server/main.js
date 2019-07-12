import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json())

import BloggersController from './controllers/BloggersController.js'

server.use('/api/blogs', new BloggersController().router)
server.use('/',express.static(__dirname +'/../public'))


server.use((error, req, res, next) => {
    res.status(error.status || 400). send(error)
})

server.listen(port, () => {
    console.log("The server is on port: ", port, " .")
})