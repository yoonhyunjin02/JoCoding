const express = require('express')
const cors= require('cors');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors())

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    
    if(name == "dog"){
        res.json({'sound' : "멍멍"})
    } else if(name == "cat"){
        res.json({'sound' : "야옹"})
    } else if(name == "pig"){
        res.json({'sound' : "꿀꿀"})
    } else {
        res.json({'sound' : "없음"})
    }
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})