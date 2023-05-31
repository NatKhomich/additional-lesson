import React from 'react';
import {CurrentBankomat} from './CurrentBankomat';
import styled from 'styled-components';
import {MoneyType} from '../App';

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((el: MoneyType, index) => (
        <CurrentBankomat
            key={index}
            money={el}
        />
    ))

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`