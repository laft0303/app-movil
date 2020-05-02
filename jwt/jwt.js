require('dotenv').config()

const jwt = require('jsonwebtoken')
const moment = require('moment')
const encryptor = require('simple-encryptor')(process.env.JWT_ENCRYPT)

module.exports = ({
    createToken: (user) => {
        try {
            const payload = {
                sub: encryptor.encrypt(user),
                name: user.name,
                iat: moment().add(20, 'minute').unix()
            }
            return jwt.sign(payload, process.env.JWT_SESSION)
        } catch (e) {
            return false
        }
    },

    isAuth: (req, res, next) => {
        try {
            const { headers, headers: { authorization } } = req //vuando no son correctos los campos y datos al ingresar
            if (!authorization) {
                res.status(403).json({ status: 'error', error: 'Acceso no permitido' })
            } else {
                const token = authorization.split(' ').pop(); //cuando caduca el token y parte la cadena en partes  1.Split (1.bearer y 2.JWT) y el 2.Pop(coge el JWT para escoger la ultima posicion que es JWT)
                const payload = jwt.verify(token, process.env.JWT_SESSION) //verify el payload para mirar el acceso segun su caducacion o si no tiene permiso
                if (!payload || payload && payload.iat < moment().unix()) {
                    res.status(401).json({ status: 'error', error: 'Acceso no permitido' })
                } else {
                    req.body.user = encryptor.decrypt(payload.sub)
                    next() //sique el proceso si todo esta correcto
                }
            }
        } catch (error) {
            res.status(403).json({ status: 'error', error: 'Acceso no permitido' })
        }
    }

})