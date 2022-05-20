import React from 'react'
import {useState} from 'react'
import styles from "./todo.module.css";
import TodoItems from './TodoItems';

const Todo = () => {
    let [newTodo,setTodo]=useState("");
    const [todos,setTodos]=useState([])

    // const handleChange=(e) => {
    //     // newTodo = e.target.value;
    //     setTodo(e.target.value);
    // }
    const onDelete = (id) => {
        let newTodos=todos.filter(todo => todo.id !==id )
        setTodos(newTodos);
    }
    
  return (
    <div>
        <h1 className={styles.hColor}>Todo App</h1>
        <input type="text" className={styles.big_size} onChange={(e) => setTodo(e.target.value)} value={newTodo} placeholder='Enter'/>
        <button className={styles.big_size} onClick={()=> {
            // console.log(newTodo)
            // todos.push();
            setTodos([...todos,{
                id:Date.now(),
                value:newTodo,
            }])
            // console.log(todos)
            setTodo("");
        }}>Add</button>
        <div className={styles.todo_list}>
            {todos.map((todo)=> (
                <TodoItems key={todo.id} todo={todo} onDelete={onDelete}/>
            ))}
        </div>
    </div>
  )
}

export default Todo