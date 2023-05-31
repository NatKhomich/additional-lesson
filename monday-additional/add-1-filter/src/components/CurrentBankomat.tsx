import React from 'react';
import styled from 'styled-components';
import {MoneyType} from '../App';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'green' : 'blue'}>
                <div> {props.money.banknotes} </div>
                <div> {props.money.value} </div>
                <div> {props.money.number} </div>
            </Banknote>

            {/* {props.money.banknotes === 'Dollars'
                ? <BanknoteGreen>
                    <div> {props.money.banknotes} </div>
                    <div> {props.money.value} </div>
                    <div> {props.money.number} </div>
                </BanknoteGreen>

                : <BanknoteBlue>
                    <div> {props.money.banknotes} </div>
                    <div> {props.money.value} </div>
                    <div> {props.money.number} </div>
                </BanknoteBlue>
            }*/}
        </>
    );
};

const Banknote = styled.div`
 background-color: ${props => {
    if(props.color === 'green') {
        return 'chartreuse'
    } else {
        return '#61dafb'
    }
}};
  width: 400px;
  height: 200px;
  margin: 10px;
`
/*
const BanknoteGreen = styled.div`
 background-color: chartreuse;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
 background-color: #61dafb;
  width: 400px;
  height: 200px;
  margin: 10px;
`*/