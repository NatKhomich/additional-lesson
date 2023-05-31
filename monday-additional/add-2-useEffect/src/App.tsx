import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Input} from './components/Input';
import Button from './components/Button';

type TodosType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {

  const [todos, setTodos] = useState<TodosType[]>([])

  // const [newTitle, setNewTitle] = useState('')
  const newTitle = useRef<HTMLInputElement | null>(null)

  const fetchConst = () => { //вынесли в переменную функцию fetch
    fetch('https://jsonplaceholder.typicode.com/todos') /*todos/1 - вывести 1*/
        .then(response => response.json())
        .then(json => setTodos(json))
  }

  useEffect(() => {
    fetchConst()
  }, [])

  const onClickHandler = () => {
    fetchConst()
  }

  const onClickHideHandler = () => {
    setTodos([])
  }

  const addNewTask = () => {
    if (newTitle.current) {
      const newTask = {userId: 1, id: todos.length+1, title: newTitle.current?.value, completed: false}
      setTodos( [newTask, ...todos] )
      //setNewTitle('')
      newTitle.current.value = ''
    }
  }


  return (
      <div className="App">
        <div>
          <Input // newTitle={newTitle}
              //setNewTitle={setNewTitle}
              newTitle={newTitle}
          />
          <Button name={'+'} callBack={ addNewTask }/>
        </div>

        <button onClick={onClickHandler}> Show me Data</button>
        <button onClick={onClickHideHandler}> Hide my Data</button>

        <ul>
          {todos.map(el => {
            return (
                <li key={el.id}>
                  <span> {el.id} </span>
                  <span> {el.title} </span>
                  <input type="checkbox" checked={el.completed}/>
                </li>
            )
          })}
        </ul>
      </div>
  );
}

export default App;
