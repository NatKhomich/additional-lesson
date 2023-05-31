import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from '../App';


type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType)=> void
}

export const Country = (props: CountryPropsType) => {
    console.log(props.data)
    const setAll = () => {
        {props.setFilterValue('All')}
    }

    const setDollars = () => {
        {props.setFilterValue('Dollars')}
    }

    const setRUBLES = () => {
        {props.setFilterValue('RUBLES')}
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLES}>RUBLES</button>
            <City data={props.data}/>
        </div>
    );
};