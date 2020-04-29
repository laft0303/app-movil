const express = require('express')
const router = express.Router()

const DB = require('../../db/db')
const db = new DB('BRANDS')
const validator = require('../../validate/validator')

router
    .get('/brands', async(req, res) => {
        try {
            const data = await db.getAll()
            res.json(data)
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .get('/brands/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const [data] = await db.getOne(id)
            res.json(data)
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .post('/brands', async(req, res) => {
        try {
            const data = validator('brand').cleanData(req.body)
            const errors = validator('brand').isValid(data)
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
    .put('/brands/:id', async(req, res) => {
        try {
            const { body: data } = req
            const { params: { id } } = req
            const response = await db.update(data, id)
            res.json({ status: 'ok', response })
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })
    .delete('/brands/:id', async(req, res) => {
        try {
            const { params: { id } } = req
            const response = await db.destroy(id)
            res.json({ status: 'ok', response })
        } catch (error) {
            res.json({ status: 'error', error })
        }
    })

module.exports = router