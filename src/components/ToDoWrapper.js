import { useState } from 'react';
import { ToDoForm } from "./ToDoForm";

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className="TodoWrapper">
            <ToDoForm />
        </div>
    )
}