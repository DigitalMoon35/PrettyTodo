const pool = require('./db.js')
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = "5050";

//middleware
app.use(express.json());
app.use(cors());


//get all the Todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await pool.query(
            "SELECT * FROM todos"
        )
        console.log('hola');
        res.json(todos.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// create new todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const response = await pool.query(
            "INSERT INTO todos (description) VALUES($1)", [description]
        );
        res.json(response)
    } catch (error) {
        console.error(error.message);
    }
})


// remove todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const removedTodo = await pool.query(
            "DELETE FROM todos WHERE id = $1", [id]
        )
        res.json(`removed todo with id:${id}`);
    } catch (error) {
        console.error(error.message);
    }
})

app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        console.log(req.body)
        console.log(req.params)
        const updatedTodo = await pool.query(
            "UPDATE todos SET description = $1 WHERE id = $2", [description, id]
        )
        res.json(updatedTodo);
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(PORT, () => console.log("Listening on 5050 GOD!!"))