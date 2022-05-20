import React from 'react'
import styles from "./todo.module.css";

const TodoItems = ({todo, onDelete}) => {
    const [ticked, setTicked]= React.useState(todo.ticked);
  return (
        <div className={styles.todo} key={todo.id}>
            <input type="checkbox"
            checked={ticked} onChange={(e) => {
                // console.log(e.target.checked)
                setTicked(e.target.checked)
            }}/>
            <div className={ticked ? styles.strike : ""}>{todo.value}</div>
            <button onClick={ () => onDelete(todo.id)}>Remove</button>
        </div>  
    )
}

export default TodoItems