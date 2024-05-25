import React from 'react'
import './App.css'
import Todo from '../public/Todo';

function App() {
  const [data , setData] = React.useState({});
  const [todoArray, setTodoArray] = React.useState([]);

  function handleChange(e) {
    const newdata = e.target.value;
    setData(prev => {
      return {
        ...prev, 
        id: new Date(),
        todo: newdata
      }
    })
  }
  function handleSubmit() {
    setTodoArray(prev => [...prev, data]);
    setData({});

  }

  function handleDelet(todoId) {
    setTodoArray(prevArray => {
      return prevArray.filter(todoO => todoO.id !== todoId)
    })
  }


  return (
    <>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit} >Add</button>
        {
          todoArray.map((todoO, index) => <Todo todo={todoO.todo} key={index} onClick={handleDelet} id={todoO.id} />)
        }
      </div>
    </>
  )
}

export default App
