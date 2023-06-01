import React from 'react';
import {PagesType} from '../../dataState/dataState';
import {useParams} from 'react-router-dom';

type PageType = {
    pages: PagesType[]
}

export const Page = (props: PageType) => {

    const params = useParams() //сохраняет в себя {id: '0'} или {id: '1'} в виде строки
    //console.log(params)

    return (

        <div>
            <div> {props.pages[Number(params.id)].heading} </div>
            <div> {props.pages[Number(params.id)].about} </div>
        </div>

    );
};

export default Page;