"use client"

import { useState } from "react"

type Todolist = {
  text: string,
  completed: boolean
}

function Todolist() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todolist[]>([]);

  const addTodo = () => {
    const newTodo: Todolist = { text: todo, completed: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  const deleteTodo = (i: number) => {
    const updated = [...todos];
    updated.splice(i, 1);
    setTodos(updated);
  }

  const toggleStatus = (i: number) => {
    const updated = [...todos];
    updated[i].completed = !updated[i].completed;
    setTodos(updated);
  }

  const keyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <>
      <br />
      <h1>Todolist</h1>
      <input type="text" value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} onKeyDown={keyEvent} />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      <ul>
        {todos.map((t, i) => (
          <li key={i} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            {t.text}
            <button onClick={() => toggleStatus(i)}>
              {t.completed ? "Not Completed" : "Completed"}
            </button>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
      <h2 style={{color: "green"}}>Completed</h2>
      <ul>
        {todos.filter(t => t.completed).map((t, i) => (
          <li key={i}>
            {t.text}
          </li>
        ))}
      </ul>
      <br />
      <h2 style={{color: "red"}}>Not Completed</h2>
      <ul>
        {todos.filter(t => !t.completed).map((t, i) => (
          <li key={i}>
            {t.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todolist