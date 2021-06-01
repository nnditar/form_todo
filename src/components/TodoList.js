import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, deleteTodo}) => {

    return (
        <div>
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <Todo todo={todo} deleteTodo={deleteTodo}/>
            </li>
        ))}
        </ul>        
        
        </div>
    );
};

export default TodoList;