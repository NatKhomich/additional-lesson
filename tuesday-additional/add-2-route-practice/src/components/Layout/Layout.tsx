import React from 'react';
import s from '../Site.module.css'
import {NavLink, Outlet} from 'react-router-dom';


const Layout = () => {

    return (
        <>
            <nav className={s.nav}>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page/0'}>
                        Page 1
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page/1'}>
                        Page 2
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.active : s.navLink} to={'/page/2'}>
                        Page 3
                    </NavLink>
                </div>
            </nav>

            <div className={s.content}>
                <Outlet />
            </div>

        </>

    );
};

export default Layout;