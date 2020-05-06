const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('user', userSchema)