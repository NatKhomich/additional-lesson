import React from 'react';
import {PagesType} from '../../dataState/dataState';
import {Navigate, useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PageType = {
    pages: PagesType[]
}

export const Page = (props: PageType) => {

    const params = useParams() //сохраняет в себя {id: '0'} или {id: '1'} в виде строки
    console.log(params)

    return (

        <div>
            <div>
                {props.pages[Number(params.id)]? props.pages[Number(params.id)].heading : <Navigate to={'*'} />}
            </div>
            <div> {props.pages[Number(params.id)]?.about} </div>
        </div>

    );
};

export default Page;