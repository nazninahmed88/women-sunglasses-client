import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
    const { user, logOut } = useAuth();

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (Object.values(user).length) {
            setIsLogin(true);
        }
    }, [user]);

    const getLogout = () => {
        logOut();
        window.location.reload(true);
    }
    return (
        <li className="nav-item">
            {
                isLogin &&
                <Link className="nav-link text-white " onClick={getLogout}>Log Out</Link>
            }
        </li>
    );
};

export default Logout;