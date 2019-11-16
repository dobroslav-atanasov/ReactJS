import React from 'react';
import './styles.css';
import Link from '../Link';

function Aside() {
    return <aside className="Aside">
        <ul>
            <Link url="/create-post">Post</Link>
            <Link url="/register">Register</Link>
            <Link url="/login">Login</Link>
            <Link url="/profile">Profile</Link>
        </ul>
    </aside>;
};

export default Aside;