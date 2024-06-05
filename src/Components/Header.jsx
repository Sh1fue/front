import React, { useState, useEffect } from 'react';
import '../Components/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from '../modal/ModalRegistration';
import ModalAuth from "../modal/ModalAuth";
import { Link } from 'react-router-dom';

function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveAuth, setModalActiveAuth] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const saveUserDataToLocalStorage = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const removeUserDataFromLocalStorage = () => {
        localStorage.removeItem('userData');
    };
    useEffect(() => {
        const userDataFromLocalStorage = localStorage.getItem('userData');
        if (userDataFromLocalStorage) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (userData) => {
        setIsLoggedIn(true);
        saveUserDataToLocalStorage(userData);
        setModalActiveAuth(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        removeUserDataFromLocalStorage(); 
    };

    return (

            <body>
            <header className="header">
                <Link to="/" className="item-link">
                    <div className="logo">
                        <span className="logo-text">РекАвто</span>
                        <span className="logo-text-small">Автозапчасти</span>
                    </div>
                </Link>
                <button className="catalog-button">Каталог</button>
                <div className="search-bar">
                    <input type="text" placeholder="Артикул или номер детали" />
                    <button className="search-button">Найти</button>
                </div>
                <div className="icon-links">
                    <Link to="/onas" className="item-link">
                        <a href="#">
                            <i className="fas fa-info-circle"></i>
                            <span>о нас</span>
                        </a>
                    </Link>
                    <Link to="/contact" className="item-link">
                        <a href="#">
                            <i className="fas fa-address-book"></i>
                            <span>контакты</span>
                        </a>
                    </Link>
                    <Link to="/basket" className="item-link">
                        <a href="#">
                            <i className="fas fa-shopping-cart"></i>
                            <span>корзина</span>
                        </a>
                    </Link>
                    {isLoggedIn ? (
                        <button className='open-btn' onClick={handleLogout}>Выход</button>
                    ) : (
                        <div className="auth-links">
                            <button className='open-btn' onClick={() => setModalActive(true)}>Регистрация</button>
                            <Modal active={modalActive} setActive={setModalActive} />
                            <span>/</span>
                            <button className='open-btn' onClick={() => setModalActiveAuth(true)}>вход</button>
                            <ModalAuth activeAuth={modalActiveAuth} setActiveAuth={setModalActiveAuth} onLogin={handleLogin} />

                        </div>
                    )}
                </div>
            </header>
        </body>
    );
}

export default Header;
