const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api.js')
// const db = require('./db.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

app.post('/:search', (req, res) => {
  const searchText = req.params.search
  return api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    return data
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
