const mongoose = require('mongoose')

const CollectSchema = new mongoose.Schema({
    title: {
        title: String,
    },
    director: {
        director: String,
    },
    rated: {
        rated: String,
    },
    runtime: {
        runtime: String,
    }
})

module.exports = mongoose.model('Collect', CollectSchema)