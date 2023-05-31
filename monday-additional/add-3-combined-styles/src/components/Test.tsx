import React from 'react';

type PrisesPropsType = {
    id: number
    model: string
    price: number
}

type TestType = {
    prices: PrisesPropsType[]
    children?: React.ReactNode
}

export const Test = (props: TestType) => {
    return (
        <div>
            {props.prices.map(el => {
                return (
                    <div key={el.id}>
                        <span> {el.id} </span>
                        <span> {el.model} </span>
                        <span> {el.price} </span>
                    </div>
                )
            })}
            <div>{props.children}</div>
            <div>------------------------------------------------------------------</div>
        </div>
    );
};
