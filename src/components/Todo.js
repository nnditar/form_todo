import React from 'react';

const Todo = ({todo, deleteTodo}) => {

    //Events
    const deleteHandler = () => {
        deleteTodo(todo.id)
    };

    console.log(todo);
    return (
        <div>
            <span className='todo-item'>{todo.titre} : {todo.description}</span>
            <button className='complete-btn'><i className='check'>Check</i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className='trash'>Delete</i></button>

        </div>
    );
};

export default Todo;