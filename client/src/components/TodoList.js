import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    // we need to fetch the todos
    const [todos, setTodos] = useState([]);
    const [description, setDescription] = useState("");

    const getTodos = async () => {
        try {
            const todos = await fetch(
                "http://localhost:5050/todos"
            );
            
            const jsonTodos = await todos.json();
            
            setTodos(jsonTodos);
        } catch (error) {
            console.error(error.message);
        }
    }

    const onDescriptionChange = (e) => {
        console.log(description)
        setDescription(e.target.value);
    }


    const onAddTodo = async (e) => {
        e.preventDefault();

        try {
            const body = {description};
            const addedTodo = await fetch(
                "http://localhost:5050/todos", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            )
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        // call todo fetch function
        getTodos();
    },[])
    // pass each to do to a TodoList item component 
    return (
        <div className="container">
            <div>
                <input 
                    type="text" 
                    className="input"
                    value={description}
                    onChange={e => onDescriptionChange(e)}/>

                <button 
                    className="btn"
                    onClick={e => onAddTodo(e)}
                    >Add</button>
           </div>
            <ul className="">
            {todos.map(todo => {
               return <TodoItem description={todo.description} id={todo.id}/>
            })}
            </ul>
        </div>
    );
}

export default TodoList;