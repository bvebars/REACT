import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1>Navbar</h1>
            <div className={style.input}><p>News</p></div>
            <div className={style.input}><p>Profile</p></div>
            <div className={style.input}><p>Other</p></div>
            <div className={style.input}><p>Settings</p></div>
        </div>
    )
};

export default Navbar