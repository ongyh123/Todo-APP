import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo []>([]);

  return (
    <div className='App'>
      <span className='heading'>Todo List App</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
