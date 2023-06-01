import React from 'react';
import s from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './pages/Error404';
import Page from './pages/Page';
import {dataState} from '../dataState/dataState';


export const Site = () => {
    return (
        <div>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.body}>
                <div className={s.nav}>

                    {/*в нужном месте размещаем название страницы и ее адрес в теге NavLink */}
                   {/* <div><NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page1'}> Page 1 </NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page2'}> Page 2 </NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page3'}> Page 3 </NavLink></div>*/}

                    <div><NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page/0'}> Page 1 </NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page/1'}> Page 2 </NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page/2'}> Page 3 </NavLink></div>

                </div>
                <div className={s.content}>

                    <Routes> {/*Routes- родительский*/}

                        {/*Route - дочерний, element={название компоненты} path={'любой адрес'}*/}
                        {/*<Route path={'/page1'} element={<PageOne/>}/>
                        <Route path={'/page2'} element={<PageTwo/>}/>
                        <Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*при стартовой загрузке страницы должен появиться /page1 */}
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>

                        {/* если адрес не совпадает ни с одним из перечисленных в роутах {'/*'} - то ошибка */}
                        <Route path={'/*'} element={<Error404/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    );
};

