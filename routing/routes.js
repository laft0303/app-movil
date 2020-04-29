const auth = require('./routes/auth')
const users = require('./routes/users')
const profiles = require('./routes/profiles')
const brands = require('./routes/brands')

module.exports = [
    auth,
    users,
    profiles,
    brands
]