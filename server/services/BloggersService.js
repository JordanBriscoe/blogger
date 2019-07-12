import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
    title: { type: String, maxlength: 60, required: true}, 
    // "The Era of E-Sports" max length should be 60 characters
    slug: { type: String, lowercase: true, unique: true }, 
    // "the-era-of-e-sports" slug should be unique and lowercase
    summary: { type: String, maxlength: 120 },
    // "A short description." no more than 120 characters
    author: { type: String, required: true},
    // "Jim Bob"  
    body: { type: String},
    // "A bunch of stuff about E-Sports" 
    tags: [{ type: String}]
}, { timestamps: true })

export default mongoose.model('Blog', _schema)