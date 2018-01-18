const express = require('express')
const app = express()
//模板
app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

const port = 3000
app.get((req,res)=>{
    res.render('hello')
})
app.listen(port, () => {
    console.log(`Server is runnning at port ${port}`)
    console.log(` Please visit http://localhost:${port}/`)
})