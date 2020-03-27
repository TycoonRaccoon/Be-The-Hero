const app = require('./app')

const port = 3333
app.listen(port, (err) => {
    if(err)
        console.log(err)
    console.log(`Server running at port ${port}`)
})