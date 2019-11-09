import React from 'react';
import './styles.css';
import Link from '../Link';

function Navigation() {
    return <nav className="Navigation">
        <ul>
            <Link url="#">
                <img src="white-origami-bird.png" alt="white-origami-bird" />
            </Link>
            <Link url="#">Go to 1</Link>
            <Link url="#">Go to 2</Link>
            <Link url="#">Go to 3</Link>
            <Link url="#">Go to 4</Link>
            <Link url="#">Go to 5</Link>
            <Link url="#">Go to 6</Link>
        </ul>
    </nav>
};

export default Navigation;