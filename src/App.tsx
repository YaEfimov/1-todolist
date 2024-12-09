import React, {useState} from 'react';
import './App.css';
import {Todolist, TaskPropsType} from './Todolist';

export default App;

export type FilterValueType = "all" |"active" |"completed"

function App() {

    //BLL
    const todolistTitle = 'What to learn';

    const [tasks, setTasks] = useState<Array<TaskPropsType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'Redux', isDone: false},
        {id: 4, title: 'JS/TS', isDone: false}
    ]);

    //UI

    const [filter, setFilter] = useState<FilterValueType>("all");

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    let filteredTasks: Array<TaskPropsType> = tasks;
    // if (filter === "active") {
    //     filteredTasks = tasks.filter(task => {!task.isDone})
    // }
    //
    // if (filter === "completed") {
    //     filteredTasks = tasks.filter(task => {task.isDone})
    // }



    const removeTask = (taskId: number) => {
        const nextState = tasks.filter(task => {return task.id !== taskId});
        setTasks(nextState)
    }

    //UI
    return (
        <div className="App">
            <Todolist title={todolistTitle} tasks={filteredTasks} removeTask={removeTask} changeFilter = {changeFilter}/>
            {/*<Todolist title={todolistTitle_2} tasks={task_2}/>*/}
        </div>
    );
}
