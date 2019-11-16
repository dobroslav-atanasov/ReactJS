import React from 'react';
import './styles.css';
import { Link as RouterLink } from 'react-router-dom';

function Link({ children, url }) {
    return <li className="listItem">
        <RouterLink to={url}>{children}</RouterLink>
    </li>
};

export default Link;