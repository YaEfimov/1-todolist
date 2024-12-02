import React from 'react';
import {TodolistHeader} from './TodolistHeader';
import {AddForm} from './AddForm';
import {FilterButton} from './FilterButton';

export type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskPropsType>
}

export const Todolist = ({title, tasks}: TodolistPropsType) => {

    // условный рендеринг
    const tasksList = tasks.length === 0 ? <span>Your todolist is empty</span> :
        <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
                );
            })}
        </ul>;

    return (
        <div className="todolist">
            <TodolistHeader title={title}/>
            <AddForm/>
            {tasksList}
            <FilterButton/>
        </div>
    );
};