const express = require('express')
const app = express()

app.use('/', express.static('app'))

// Authentication
app.post('/api/login', function(req, res){
    res.send('Test login')
})

app.put('/api/register', function(req, res){
    res.send('Test register')
})
app.get('/api/isloggedin', function(req, res){
    res.send('Test isloggedin')
})
app.get('/api/logout', function(req, res){
    res.send('Test log out')
})
app.get('/api/doesuserexist', function(req, res){
    res.send('Test userExists')
})


// todo list categories CRUD
app.get('/api/getcat', function(req, res){
    res.send('Test get categories')
})
app.put('/api/addcat', function(req, res){
    res.send('Test add categories')
})
app.delete('/api/delcat/:catid', function(req, res){
    res.send('Test delete categories')
})
app.patch('/api/updatecat/:catid', function(req, res){
    res.send('Test update categories')
})


// todo list CRUD
app.get('/api/gettodos/:catid', function(req, res){
    res.send('Test get todo')
})
app.put('/api/addtodo', function(req, res){
    res.send('Test add todo')
})
app.delete('/api/deltodo/:todoid', function(req, res){
    res.send('Test del todo')
})
app.patch('/api/updatetodo/:todoid', function(req, res){
    res.send('Test update todo')
})

app.listen(3000)