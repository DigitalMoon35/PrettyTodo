import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function TodoItem({description}) {
    return (
        <div className="item-box">
            <li>
                {description}
            </li>
            <EditButton className="edit-button"/>
            <DeleteButton className="delete-button"/>
        </div>
    );
}

export default TodoItem;