import React, { useState, useEffect } from 'react';
import './Todo.css';

function CreateATask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="input" 
                value={value} 
                placeholder="Add a task" 
                onChange={e => setValue(e.target.value)}
            />    
        </form>
    );
}

function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "", color: task.completed ? "green" : ""}}
        >
            {task.title}
            <button style={{ background: "red" }} onClick={() => removeTask(index)}>X</button>
            <button onClick={() => completeTask(index)}>Done</button>
        </div>
    );
}
function Todo() {
    const [tasks, setTasks] = useState([
    ]); 



    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <div className="todo-container">
            <div className="header">React To-do list</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateATask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;