import React from 'react';
import {TodolistHeader} from './TodolistHeader';
import {AddForm} from './AddForm';
import {FilterButton} from './FilterButton';
import {Button} from './Button';
import {FilterValueType} from './App';

export type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValueType) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter}: TodolistPropsType) => {

    // условный рендеринг
    const tasksList = tasks.length === 0 ? <span>Your todolist is empty</span> :
        <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <Button title="x" onClickHandler={() => removeTask(task.id)}/>
                    </li>
                );
            })}
        </ul>;

    return (
        <div className="todolist">
            <TodolistHeader title={title}/>
            <AddForm/>
            {tasksList}
            <FilterButton changeFilter={changeFilter}/>
        </div>
    );
};