import {Button} from './Button';
import React from 'react';
import {FilterValueType} from './App';

type FilterButtonProps = {
    changeFilter: (filter: FilterValueType) => void
} ;

export const FilterButton = ({changeFilter} : FilterButtonProps) => {
    return (
        <div>
            <Button title={"All"} onClickHandler={() => changeFilter("all")}/>
            <Button title={"Active"}  onClickHandler={() => changeFilter("active")}/>
            <Button title={"Completed"} onClickHandler={() => changeFilter("completed")}/>
        </div>)
};