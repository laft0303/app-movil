const auth = require('./routes/auth')
const users = require('./routes/users')
const profiles = require('./routes/profiles')
const brands = require('./routes/brands')
const escuelas = require('./routes/escuelas')
const prestadores = require('./routes/prestadores')

module.exports = [
    auth,
    users,
    profiles,
    brands,
    escuelas,
    prestadores
]