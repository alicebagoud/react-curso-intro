import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const todos = [
  {text: 'Study Web Development', completed: false},
  {text: 'Meditate', completed: false},
  {text: 'Translate', completed: false},
  {text: 'Study Marketing', completed: false},
  {text: 'Trading', completed: false},
  {text: 'Gym', completed: false}
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>    
  );
}

export default App;
