console.log("ToDo App")

function login(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function register(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function userLoggedIn(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function userExists(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}


// Categories
function getCategories(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function addCategory(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function delCategory(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function updateCategory(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}


// Todo
function getTodos(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function addTodo(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function delTodo(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function updateTodo(evt){
    evt.preventDefault()
    let method = {method: evt.target.method}
    fetch(evt.target.action, method)
}