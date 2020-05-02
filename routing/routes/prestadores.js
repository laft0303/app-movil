const express = require('express')
const router = express.Router()

const DB = require('../../db/db')
const db = new DB('PRESTADORES_DE_SALUD')
const validator = require('../../validate/validator')
const jwt = require('../../jwt/jwt')

const refreshToken = (user, res) => {
    const token = jwt.createToken(user);
    res.setHeader('Authorization', `Bearer ${token}`)
}
router
    .get('/prestadores', async(req, res) => {
        try {
            const data = await db.getAll()
            res.json(data)
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .get('/prestadores/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const [data] = await db.getOne(id)
            res.json(data)
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .post('/prestadores', jwt.isAuth, async(req, res) => {
        try {
            refreshToken(req.body.user, res)
            const data = validator('prestadores').cleanData(req.body)
            const errors = validator('prestadores').isValid(data)
            if (errors) {
                res.json({ status: 'error', error: errors })
            } else {
                const response = await db.create(data)
                res.json({ status: 'ok', response })
            }
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .put('/prestadores/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const data = validator('prestadores').cleanData(req.body)
            const errors = validator('prestadores').isValid(data)
            if (errors) {
                res.json({ status: 'error', error: errors })
            } else {
                const response = await db.update(data, id)
                res.json({ status: 'ok', response })
            }
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .delete('/prestadores/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const response = await db.destroy(id)
            res.json({ status: 'ok', response })
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })

module.exports = router