import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://Student:Student@cluster0-egapb.mongodb.net/Blogger?retryWrites=true&w=majority'

let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.error('[DATABASE ERROR]:', err)
})

connection.once('open', () => {
    console.log("Database Connected!")
})