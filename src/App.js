
import { TodoSearch } from './TodoSearch.js';
import { TodoCounter } from './TodoCounter.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';

const defaultTodos = [
  {text: 'cortar cebollas'
  , completed: true},
  {text: 'Tomando el curso de React js'
  , completed: false},
  {text: 'Llorar con la llorona'
   , completed: false},
  {text: 'LALALALALALA'
    , completed: false},
  {text: 'Llevando el Curso de JavaScript'
    , completed: false}
]

function App() {
  return (
    <>
      <TodoCounter completed={15} total={25}/>  
      <TodoSearch />
      <TodoList>
          {defaultTodos.map(todo => (<TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
