const express = require('express')
const routes = require('./routes')
const cors = require('cors')


const app = express()
app.use(express.json())

app.use(cors())
app.use(routes)


const port = 3333
app.listen(port, (err) => {
    if(err)
        console.log(err)
    console.log(`Server running at port ${port}`)
})