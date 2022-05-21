import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';

import useCookie from '../../hooks/useCookie';
import CookieWrapper from '../CookieWrapper/CookieWrapper';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <CookieWrapper cookies={cookie} setCookies={setCookie} />
        </BrowserRouter>
    );
}

export default App;
