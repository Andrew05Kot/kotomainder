const mongoose = require('mongooese')
const Schema = mongoose.Schema

const planSchema = new Schema({
    title: {
        type: String,
        reqired: true
    },
    description: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('plans', planSchema)