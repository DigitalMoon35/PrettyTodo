import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    // we need to fetch the todos
    const [todos, setTodos] = useState([])

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


    useEffect(() => {
        // call todo fetch function
        getTodos();
    },[])
    // pass each to do to a TodoList item component 
    return (
        <div className="container">
            <ul className="">
            {todos.map(todo => {
               return <TodoItem description={todo.description}/>
            })}
            </ul>
        </div>
    );
}

export default TodoList;