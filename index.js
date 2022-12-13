const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

// midleware 

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Foysal portfolio server is running ')
})

app.listen(port, () => {
  console.log(`Foysal Portfolio server is running ${port}`)
})