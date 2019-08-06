import React from 'react';
import './Sidebar.css';

const sidebar = props => {
    let sideClasses = 'sidebar';
    if (props.show) {
        sideClasses = 'sidebar open';
    }
    return (<nav className = {sideClasses}>
        <ul>
            <li><a href="/">User</a></li>
            <li><a href="/">Product</a></li>
        </ul>
    </nav>);
};

export default sidebar