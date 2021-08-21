console.log("ToDo App")

function login(evt){
    evt.preventDefault()
    let theFormData = {}
    for(let i=0; i<evt.target.length; i++){
        theFormData[evt.target[i].name] = evt.target[i].value
    }
    fetch(evt.target.action, 
        {
            method: "POST",
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

function register(evt){
    evt.preventDefault()
    let theFormData = {}
    for(let i=0; i<evt.target.length; i++){
        theFormData[evt.target[i].name] = evt.target[i].value
    }
    fetch(evt.target.action, 
        {
            method: "PUT",
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

function userExists(evt){
    evt.preventDefault()
    url = evt.target.action + "?username=" +
        evt.target[0].value;
    fetch(url, 
        {
            method: "GET",
            credentials: "include"
        }
    )
}

function userLoggedIn(evt){
    evt.preventDefault()
    fetch(evt.target.action, 
        {
            method: "GET",
            credentials: "include"
        }
    )
}

function userLogout(evt){
    evt.preventDefault()
    fetch(evt.target.action, 
        {
            method: "GET",
            credentials: "include"
        }
    )
}


// Categories
function getCategories(evt){
    evt.preventDefault()
    fetch(evt.target.action, 
        {
            method: "GET",
            credentials: "include"
        }
    )
}

function addCategory(evt){
    evt.preventDefault()
    let theFormData = {}
    theFormData[evt.target[0].name] = 
        evt.target[0].value
    fetch(evt.target.action, 
        {
            method: "PUT",
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

function delCategory(evt){
    evt.preventDefault()
    let url = evt.target.action + '/' + evt.target[0].value
    fetch(url, 
        {
            method: "DELETE",
            credentials: 'include',
        }
    )
}

function updateCategory(evt){
    evt.preventDefault()
    let url = evt.target.action + '/' + evt.target[0].value
    let theFormData = {}
    theFormData[evt.target[1].name] = 
        evt.target[1].value
    fetch(url, 
        {
            method: "PATCH",
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}


// Todo
function getTodos(evt){
    evt.preventDefault()
    let url = evt.target.action + '/' + evt.target[0].value
    fetch(url, 
        {
            method: "GET",
            credentials: 'include',
        }
    )
}

function addTodo(evt){
    evt.preventDefault()
    let theFormData = {}
    theFormData[evt.target[0].name] = 
        evt.target[0].value
    fetch(evt.target.action, 
        {
            method: "PUT",
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

function delTodo(evt){
    evt.preventDefault()
    let url = evt.target.action + '/' + evt.target[0].value
    fetch(url, 
        {
            method: "DELETE",
            credentials: 'include',
        }
    )
}

function updateTodo(evt){
    evt.preventDefault()
    let url = evt.target.action + '/' + evt.target[0].value
    let theFormData = {}
    theFormData[evt.target[1].name] = 
        evt.target[1].value
    fetch(url, 
        {
            method: "PATCH",
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}