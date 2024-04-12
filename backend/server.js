const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const listOfTodos = [
    {title: "Task 1", description: "Description for Task 1", id: 1},
    {title: "Task 2", description: "Description for Task 2", id: 2},
    {title: "Task 3", description: "Description for Task 3", id: 3},
    {title: "Task 4", description: "Description for Task 4", id: 4},
    {title: "Task 5", description: "Description for Task 5", id: 5},
    {title: "Task 6", description: "Description for Task 6", id: 6},
    {title: "Task 7", description: "Description for Task 7", id: 7},
    {title: "Task 8", description: "Description for Task 8", id: 8},
    {title: "Task 9", description: "Description for Task 9", id: 9},
    {title: "Task 10", description: "Description for Task 10", id: 10},
    {title: "Task 11", description: "Description for Task 11", id: 11},
    {title: "Task 12", description: "Description for Task 12", id: 12},
    {title: "Task 13", description: "Description for Task 13", id: 13},
    {title: "Task 14", description: "Description for Task 14", id: 14},
    {title: "Task 15", description: "Description for Task 15", id: 15},
    {title: "Task 16", description: "Description for Task 16", id: 16},
    {title: "Task 17", description: "Description for Task 17", id: 17},
    {title: "Task 18", description: "Description for Task 18", id: 18},
    {title: "Task 19", description: "Description for Task 19", id: 19},
    {title: "Task 20", description: "Description for Task 20", id: 20}
]

app.get("/todo",async (req,res)=>{
    let todos = listOfTodos;
    const length = Math.floor(Math.random() * 21);

    for(let i=0; i<length; i++){
        const removeIndex = Math.floor(Math.random()*20);
        todos = todos.filter(todo => todo.id !== removeIndex);

    }

    res.status(200).json({
        todos
    });
})

app.get("/*",(req, res)=>{
    res.status(400).json({
        msg: "Route Does Not Exist"
    })
})

app.use((err, req, res, next)=>{
    return res.status(500).json({
        msg: "Internal Server Error"
    })
})

app.listen(3000);