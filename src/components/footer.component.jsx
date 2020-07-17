import React from 'react';
import './footer.styles.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';

const Footer = () => (
    <footer className="footer">
        <Typography style={{ marginTop: '10px', fontWeight: 400 }} >&copy; { new Date().getFullYear() } - Made with<FavoriteIcon style={{ color: 'red', height: '16px' }} />
        by <a href='https://katsmunoz.github.io/' target="_blank">Katsmunoz</a>
            </Typography>
    </footer>
);

Footer.displayName = "Footer";

export default Footer;