import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Train from '../Train/Train';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

function CookieWrapper({ cookie }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (cookie === undefined) {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <Routes>
                {cookie ? (
                    <>
                        <Route path="/" element={<Link to="/profile">Profile</Link>} />
                        <Route path="/train" element={<Train />} />
                        <Route path="/profile" element={<Profile />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
            </Routes>
        </>
    );
}

export default CookieWrapper;
