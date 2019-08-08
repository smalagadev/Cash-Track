import React from 'react';
import './sidebarButtonToggle.css';

const sideBarButton = props => (
    <button className = "toggle-button" onClick={props.click}>
        <div className = "sidebar-button_line"/>
        <div className = "sidebar-button_line"/>
        <div className = "sidebar-button_line"/>
    </button>
);


export default sideBarButton;