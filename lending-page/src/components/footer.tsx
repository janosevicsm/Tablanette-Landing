import React from 'react';
import './Footer.css';
import { Container, Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" className="footer">
            <Container maxWidth="md" className="footer-container">
                <Typography variant="h6" className="footer-title">
                    Tablanette
                </Typography>
                <Typography variant="body2" className="footer-text">
                    © {new Date().getFullYear()} Tablanette. All rights reserved.
                </Typography>
                <Typography variant="body2" className="footer-text">
                    Made with ❤️ in the Balkans.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;