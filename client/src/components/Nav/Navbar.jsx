import React from 'react';
import './Navbar.css';
import  SidebarButton from '../Sidebar/SidebarButton';

const navbar = props => (
    <header className = "navbar">
        <nav className = "navbar_navigation">
            <div className  = "navbar_toggle-button">
                <SidebarButton click={props.sidebarButtonClickHandler} />
            </div>
            <div className = "navbar_logo"><a href = "/">CashTrack</a></div>
            {/* Space to make "CashTrack on left and items on right" */}
            <div className = "emptySpace"/>
            <div className = "navbar_navigation-items">
                <ul>
                    <li><a href = "/">Settings</a></li>
                    <li><a href = "/">Manage Money</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar
