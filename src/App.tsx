import { useState, useRef } from 'react';

import './App.css';

import Editor from './Editor/Editor';
import Item from './Item/Item';

import { Todo } from './types'


const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const newTxtRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef(0);

  const clickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text
      }
    ]);
  };

  const clickDelete = (id : number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <div className='App_wrap'>
        <h2>{new Date().toLocaleDateString()}</h2>
        <h1>TODAY TODO LIST</h1>
        <h5>오늘의 할 일을 기록하고<br/>
            일정 관리를 해보세요.
        </h5>
        <div>
          <ul>
            <Editor clickAdd={clickAdd} newTxtRef={newTxtRef}/>
            {todos.map(
              (todo) =>
              <Item key={todo.id} {...todo} 
              clickDelete = {clickDelete}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
