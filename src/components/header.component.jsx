import React from 'react';
import {AppBar, Toolbar } from '@material-ui/core';
import logo from './../assets/img/checklist.png';

const Header = () => (
    <AppBar position="sticky" style={{ marginBottom: 5, justifyContent: 'center' }} >
        <Toolbar>
            <img src={logo} alt="logo" width="32" height="32"></img>
            &nbsp;&nbsp;
            <h1>ToDo App</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = "Header";

export default Header;