import React from 'react';

function DeleteButton({id}) {
    const onRemove = async (e) =>  {
        e.preventDefault();
        try {
            const removedTodo = await fetch(
                `http://localhost:5050/todos/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    },
                }
            )
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <button 
            className="delete btn"
            onClick={e => onRemove(e)}>
            Delete
        </button>
    );
}

export default DeleteButton;