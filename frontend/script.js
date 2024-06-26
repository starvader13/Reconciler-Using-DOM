let oldTodoState = [];

function addTodoToDom(todo) {
    const outerDiv = document.createElement("div");
    const innerTitleDiv = document.createElement("div");
    const innerDescriptionDiv = document.createElement("div");
    const button = document.createElement("button");

    outerDiv.setAttribute("id", todo.id);
    button.setAttribute("onclick", `markAsDone(${todo.id})`);

    innerTitleDiv.innerHTML = `<b>Title: </b> ${todo.title}`;
    innerDescriptionDiv.innerHTML = `<b>Description: </b> ${todo.description}`;
    button.innerHTML = "Mark as done";

    outerDiv.appendChild(innerTitleDiv);
    outerDiv.appendChild(innerDescriptionDiv);
    outerDiv.appendChild(button);

    const parent = document.getElementById('todos');
    parent.appendChild(outerDiv);
}

function removeTodoFromDom(todo) {
    const parent = document.getElementById(todo.id);
    if(parent && parent.parentNode){
        parent.parentNode.removeChild(parent);
    }
}

function updateTodoInDom(oldTodo, newTodo) {
    const parent = document.getElementById(oldTodo.id);
    if(oldTodo.title!==newTodo.title){
        parent.children[0].innerHTML=`<b>Title: </b> ${newTodo.title}`;
    }
    if(oldTodo.description!==newTodo.description){
        parent.children[1].innerHTML=`<b>Description: </b> ${newTodo.description}`;
    }
}

function updateState(newTodos) {
    const added = [];
    const updated = [];

    if(oldTodoState.length!==0){
        for(const todo of newTodos){
            let check=false;
            for(const oldTodo of oldTodoState){
                if(todo.id!==oldTodo.id){
                    check=true;
                }
                else{
                    if(todo.title!==oldTodo.title || todo.description!==oldTodo.description) {
                        updated.push(todo);
                    }
                    check=false;
                    break;
                }
            }
            if(check===true){
                added.push(todo);
            }
        }
    }
    else{
        newTodos.forEach((todo)=> {
            added.push(todo);
        })
    }

    const deleted = oldTodoState.filter((oldTodo)=>{
        return !newTodos.some(todo => oldTodo.id===todo.id);
    })

    added.forEach(todo => addTodoToDom(todo));
    deleted.forEach(todo => removeTodoFromDom(todo));
    updated.forEach(todo => {
        const oldTodo = oldTodoState.find(oldTodo => todo.id===oldTodo.id);
        updateTodoInDom(oldTodo, todo);
    })

    oldTodoState = newTodos;
}

function markAsDone(todoId){
    const element =  document.getElementById(todoId);
    element.children[2].innerHTML = "Done!";
}

setInterval(async ()=>{
    const response = await fetch("http://127.0.0.1:3000/todo")
    const json = await response.json();
    updateState(json.todos);
}, 5000);

