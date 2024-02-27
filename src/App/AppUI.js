import { TodoSearch } from '../TodoSearch/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { TodosEmpty } from '../TodosEmpty/index.js';
import { TodosError } from '../TodosError/index.js';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { Modal } from '../Modal/index.js';
import { TodoForm } from '../TodoForm/index.js';

function AppUI () {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
    return (
        <>
          <TodoCounter/>  
          <TodoSearch/>
          <TodoList>
              {loading && (
              <>
              <TodosLoading/>
              <TodosLoading/>
              <TodosLoading/>
              </>
              )}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length === 0)&& <TodosEmpty/>}
              {searchedTodos.map(todo => (<TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={()=> completeTodo(todo.text)}
                onDelete = {()=> deleteTodo(todo.text)}
              />
              ))}
           </TodoList>
          <CreateTodoButton setOpenModal={setOpenModal}/>
          {openModal && (
            <Modal>
                 <TodoForm/>
             </Modal>
          )
          }
        </>
      );

}

export {AppUI};