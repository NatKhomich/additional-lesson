import React, {useState} from 'react';
import './App.css';
import {Country} from "./components/Country";

export type BanknotsType = 'Dollars'|'RUBLES'|'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}

let defaultMoney: MoneyType[] = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLES', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLES', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLES', value: 50, number: ' v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filterKey: BanknotsType): MoneyType[] => {
    if (filterKey === 'All') {
        return money
    }
    return money.filter( el => el.banknotes === filterKey )
}

function App() {
    const money = defaultMoney
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')

    const filteredMoney = moneyFilter(money, filterValue)
    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue}
            />
        </div>
    );
}

export default App;
