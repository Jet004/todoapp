const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use('/', express.static('app'))

// Authentication
app.post('/api/login', jsonParser, function(req, res){
    console.log(req.body)
    res.status(200)
    res.send('Test login')
})

app.put('/api/register', jsonParser, function(req, res){
    console.log(req.body)
    res.status(201)
    res.send('Test register')
})
app.get('/api/isloggedin', function(req, res){
    res.status(200)
    res.send('Test isloggedin')
})
app.get('/api/doesuserexist', function(req, res){
    res.status(200)
    res.send('Test userExists')
})
app.get('/api/logout', function(req, res){
    res.status(200)
    res.send('Test log out')
})



// todo list categories CRUD
app.get('/api/getcat', function(req, res){
    res.status(200)
    res.send('Test get categories')
})
app.put('/api/addcat', jsonParser, function(req, res){
    console.log(req.body)
    res.status(201)
    res.send('Test add categories')
})
app.delete('/api/delcat/:catid', function(req, res){
    res.status(202)
    res.send('Test delete categories')
})
app.patch('/api/updatecat/:catid', jsonParser, function(req, res){
    console.log(req.body)
    res.status(202)
    res.send('Test update categories')
})


// todo list CRUD
app.get('/api/gettodos/:catid', function(req, res){
    res.status(200)
    res.send('Test get todo')
})
app.put('/api/addtodo', jsonParser, function(req, res){
    console.log(req.body)
    res.status(201)
    res.send('Test add todo')
})
app.delete('/api/deltodo/:todoid', function(req, res){
    res.status(202)
    res.send('Test del todo')
})
app.patch('/api/updatetodo/:todoid', jsonParser, function(req, res){
    console.log(req.body)
    res.status(202)
    res.send('Test update todo')
})

app.listen(3000)