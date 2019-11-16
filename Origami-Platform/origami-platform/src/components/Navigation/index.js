import React from 'react';
import './styles.css';
import Link from '../Link';

function Navigation() {
    return <nav className="Navigation">
        <ul>
            <Link url="/">
                <img src="white-origami-bird.png" alt="white-origami-bird" />
            </Link>
            <Link url="/create-post">Post</Link>
            <Link url="/register">Register</Link>
            <Link url="/login">Login</Link>
            <Link url="/profile">Profile</Link>
        </ul>
    </nav>
};

export default Navigation;