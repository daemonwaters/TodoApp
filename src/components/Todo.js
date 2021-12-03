import React from 'react'
import { FaTrash} from 'react-icons/fa'

function Todo({index,todo,todos,setTodos}) {

    const handleRemove = ()=>{
       setTodos(todos.filter(item=> item !== todo));
    }


    return (
        <div className="todo">
            <h2>
                {index}
            </h2>
            <p className="todo-text">
                {todo}
            </p>
            <div className="btn">
                <button onClick={handleRemove} className="remove">
                    <FaTrash/>
                </button>
            </div>
        </div>
    )
}

export default Todo
