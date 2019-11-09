import React from 'react';
import './styles.css';

function Link({ children, url }) {
    return <li className="listItem">
        <a href={url}>{children}</a>
    </li>
};

export default Link;