import { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState(''); // keep tracking the input value

    // to capture the input value when submitting the form
    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent the default action - reloading the page when clicking the submit button

        addTodo(value); // need to pass this value to the to do state (ToDoWrapper.js) - use "Props" to pass the input value

        setValue(""); // clear the input
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="What is the task today?" onChange={(e) => { setValue(e.target.value) }} />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}
