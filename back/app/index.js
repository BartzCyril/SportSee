const path = require('path')
const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(router)

// Serve the built front (front/dist) when present, so one Node app hosts both
const dist = path.join(__dirname, '../../front/dist')
app.use('/SportSee', express.static(dist))
app.get('/SportSee/*', (req, res) => res.sendFile(path.join(dist, 'index.html')))
app.get('/', (req, res) => res.redirect('/SportSee/12'))

app.listen(port, () => console.log(`Magic happens on port ${port}`))
