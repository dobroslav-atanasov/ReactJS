import React from 'react';
import './styles.css';
import Link from '../Link';

function Footer() {
    return <footer className="Footer">
        <ul>
            <Link url="#">Go to 1</Link>
            <Link url="#">Go to 2</Link>
            <Link url="#">Go to 3</Link>
            <Link url="#">Go to 4</Link>
            <Link url="#">Go to 5</Link>
            <Link url="#">Go to 6</Link>
            <Link url="#">Go to 7</Link>
            <Link url="#">Go to 8</Link>
            <Link url="#">Go to 9</Link>
            <Link url="#">Go to 10</Link>
            <Link url="#">
                <img src="blue-origami-bird-flipped.png" alt="blue-origami-bird-flipped" />
            </Link>
        </ul>
        <p>SoftUni 2019</p>
    </footer>
};

export default Footer;