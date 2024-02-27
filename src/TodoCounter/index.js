import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import { useContext } from 'react';

function TodoCounter() {
    const {completedTodos,totalTodos} = useContext(TodoContext)
    return (
        <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
    );
};

export { TodoCounter };