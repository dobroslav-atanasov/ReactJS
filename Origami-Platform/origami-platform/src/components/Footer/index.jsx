import React from 'react';
import './styles.css';
import Link from '../Link';

function Footer() {
    return <footer className="Footer">
        <ul>
            <Link url="/create-post">Post</Link>
            <Link url="/register">Register</Link>
            <Link url="/login">Login</Link>
            <Link url="/profile">Profile</Link>
            <Link url="/">
                <img src="blue-origami-bird-flipped.png" alt="blue-origami-bird-flipped" />
            </Link>
        </ul>
        <p>SoftUni 2019</p>
    </footer>
};

export default Footer;