import React from 'react';
import style from './Header.module.css';   // Imported style file
import Logo from '../../Images/logo.jpg';

export const Header = () => {
    return (
        <div className={style.header}>
            <img src={Logo} alt="logo"/>
        </div>
    )
}