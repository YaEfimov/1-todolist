import React from 'react';
import './App.css';
import {Todolist, TaskPropsType} from './Todolist';

export default App;

function App() {

    //BLL
    const todolistTitle_1 = 'What to learn';
    const todolistTitle_2 = 'What to buy';

    const task_1: Array<TaskPropsType> = [
         {id: 1, title: 'HTML&CSS', isDone: true},
         {id: 2, title: 'CSS', isDone: true},
         {id: 3, title: 'Redux', isDone: false},
         {id: 4, title: 'JS/TS', isDone: false}
    ];
    // const task_2: Array<TaskPropsType> = [
    //     {id: 5, title: 'Meet', isDone: true},
    //     {id: 6, title: 'Beer', isDone: false},
    //     {id: 7, title: 'Water', isDone: false}
    // ];

    //UI
    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={task_1}/>
            {/*<Todolist title={todolistTitle_2} tasks={task_2}/>*/}
        </div>
    );
}
