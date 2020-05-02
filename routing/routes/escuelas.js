const express = require('express')
const router = express.Router()

const DB = require('../../db/db')
const db = new DB('ESCUELAS')
const validator = require('../../validate/validator')
const jwt = require('../../jwt/jwt')
const Response = require('../reponse')

const refreshToken = (user, res) => {
    const token = jwt.createToken(user);
    res.setHeader('Authorization', `Bearer ${token}`)
}
router
    .get('/escuelas', async(req, res) => {
        try {
            const data = await db.getAll()
            Response.succes(res, data)
        } catch (error) {
            Response.error(res, error)
        }
    })
    .get('/escuelas/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const [count] = await db.countOne(id)
            if (!count || count.total == 0) {
                Response.error(res, { error: " no se  encontró ningún registro con ese campo ID" }, 404)
            } else {
                const [data] = await db.getOne(id)
                Response.succes(res, data)
            }
        } catch (error) {
            Response.error(res, error)
        }
    })
    .post('/escuelas', jwt.isAuth, async(req, res) => {
        try {
            refreshToken(req.body.user, res)
            const data = validator('escuelas').cleanData(req.body)
            const errors = validator('escuelas').isValid(data)
            if (errors) {
                Response.error(res, errors)
            } else {
                const { insertId } = await db.create(data)
                Response.succes(res, { action: 'created', id: insertId }, 201)
            }
        } catch (error) {}
        Response.error(res, error)
    })
    .put('/escuelas/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const [count] = await db.countOne(id)
            if (!count || count.total == 0) {
                Response.error(res, { error: "No se encotró ningún registro con ese ID" }, 404)
            } else {
                const data = validator('escuelas').cleanData(req.body)
                const errors = validator('escuelas').isValid(data)
                if (errors) {
                    Response.error(res, errors)
                } else {
                    const response = await db.update(data, id)
                    Response.succes(res, { action: 'updated', id })
                }
            }
        } catch (error) {
            Response.error(res, error)
        }
    })
    .delete('/escuelas/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const [count] = await db.countOne(id)
            if (!count || count.total == 0) {
                Response.error(res, { error: "No se encotró ningún registro con ese ID" }, 404)
            } else {
                const response = await db.destroy(id)
                Response.succes(res, { action: 'deleted', id })
            }
        } catch (error) {
            Response.error(res, error)
        }
    })


module.exports = router