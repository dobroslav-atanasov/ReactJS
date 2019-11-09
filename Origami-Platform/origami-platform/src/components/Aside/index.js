import React from 'react';
import './styles.css';
import Link from '../Link';

function Aside() {
    return <aside className="Aside">
        <ul>
            <Link url="#">Go to 1</Link>
            <Link url="#">Go to 2</Link>
            <Link url="#">Go to 3</Link>
            <Link url="#">Go to 4</Link>
            <Link url="#">Go to 5</Link>
            <Link url="#">Go to 6</Link>
            <Link url="#">Go to 7</Link>
        </ul>
    </aside>;
};

export default Aside;