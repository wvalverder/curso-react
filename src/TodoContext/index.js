import React from 'react';
import {createContext} from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

/* const defaultTodos = [
  {text: 'cortar cebollas'
 , completed: true},
  {text: 'Tomando el curso de React js'
  , completed: false},
  {text: 'Llorar con la llorona'
 , completed: false},
  {text: 'LALALALALALA'
   , completed: false},
  {text: 'Llevando el Curso de JavaScript'
  , completed: true}
]


localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
localStorage.removeItem('TODOS_V1')
localStorage.getItem('TODOS_V1')*/

const TodoContext = createContext();

function TodoProvider({ children }) {

    const {item:todos, saveItem:saveTodos, loading , error}= useLocalStorage('TODOS_V1',[]);

    const [searchValue, setSearchValue] = useState('');
    
    const [openModal, setOpenModal] = useState(false);
  
    const completedTodos = todos.filter(todos => !!todos.completed).length;
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    };
      
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                addTodo,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };