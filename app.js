const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')

const port = 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } })) //cuanto puedo guardar

app.get('/', (req, res) => {
    res.json({ status: 'success' })
})

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.post('/upload-images', async(req, res) => {
    try {
        const file = req.files
        const fileAcepted = ['image/png']

        if (fileAcepted.includes(file.image.mimetype)) {
            const fileName = `${file.image.name.toLowerCase().replace(/[^a-z0-9-.]/g, '')}` //lowercase(todo en minuscula)
            const pathFile = path.resolve(publicPath, 'images', fileName)
            await file.image.mv(pathFile)
            res.status(200).json({ status: 'ok', imageName: fileName }) //const pathUpload = path.resolve(pathFile, fileName) //si crea mas carpetas
        } else {
            res.status(400).json({ status: 'error', message: 'tipo de archivo no valido' })
        }
    } catch (error) {
        console.log('error:', error)
        res.status(400).json({ status: 'error' })
    }

})

const routes = require('./routing/routes')
app.use('/api/v1.0/', routes)

app.get('*', (req, res) => {
    res.status(401).json({ status: 'error' })
})

app.listen(port, () => {
    console.log(`Servidor funcionando en localhost: ${port}`)
});