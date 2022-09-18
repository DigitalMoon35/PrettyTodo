import React, {useState} from 'react';

function EditModal({description, id}) {
    const [update, setUpdate] = useState(description);

    const onSaveEdit = async (e) => {
        e.preventDefault();
        try {
            const body = {"description": update};
            const editedTodo = await fetch(
                `http://localhost:5050/todos/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            )
            window.location ="/"; 
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div className="modal">
            <h2>Edit Your Todo</h2>
            <input 
                type="text" 
                className="input" 
                value={update}
                onChange={e => setUpdate(e.target.value)}/>
            <div>
                <button 
                    className="btn"
                    onClick={e => onSaveEdit(e)}>Save</button>
                <button className="btn"> Cancel</button>
            </div>
        </div>
    );
}

export default EditModal;