import React from 'react';

function TodoHeader(props) {
    return (
       <header>
           <h1>Todo List</h1>
           <div >
            <input type="text" className="input"/>
            <button className="btn">Add</button>
           </div>
       </header>
    );
}

export default TodoHeader;