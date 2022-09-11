const Collect = require('../models/Collect')

module.exports = {
    getCollection: async (req, res) => {
        console.log(req.user)
        res.render('collection.ejs')
    }
}

