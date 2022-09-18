import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function TodoItem({description, id}) {
    return (
        <div className="item-box">
            <li>
                {description}
            </li>
            <EditButton 
                className="edit-button" 
                id={id} 
                description={description}/>
            <DeleteButton 
                className="delete-button" 
                id={id}/>
        </div>
    );
}

export default TodoItem;