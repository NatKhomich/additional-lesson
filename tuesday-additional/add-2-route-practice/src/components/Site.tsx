import React from 'react';
import s from './Site.module.css'
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from './pages/Error404';
import Page from './pages/Page';
import {dataState} from '../dataState/dataState';
import Layout from './Layout/Layout';


export const Site = () => {
    return (
        <div>
            <div className={s.header}>HEADER</div>
            <div className={s.body}>
                    <Routes>
                        <Route path={'/'} element={<Layout />}>
                            <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                            <Route index element={<Navigate to={'/page/0'}/>}/>
                            <Route path={'*'} element={<Error404/>}/>
                        </Route>
                    </Routes>
            </div>
        </div>
    );
};

