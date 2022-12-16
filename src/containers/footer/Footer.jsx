import React from 'react';
import './footer.css';

const Footer = () => (
    <div className="kanye__footer section__padding">
        <div className="kanye__footer-heading">
            <h1 className="gradient__text">Ye for President!</h1>
        </div>
        <div className="kanye__footer-links">
            <div className="kanye__footer-links_container">
                <h4>Links</h4>
                <p><a href="https://github.com/Chocotunda/enrise-kanye-quote-challenge" target="_blank" rel="noreferrer">Github</a></p>
                <p><a href="https://enrise.com/" target="_blank" rel="noreferrer">Enrise</a></p>
            </div>
            <div className="kanye__footer-links_container">
                <h4>Company</h4>
                <p><a href="https://enrise.com/" target="_blank" rel="noreferrer">Enrise</a></p>
            </div>
        </div>
        <div className="kanye__footer-copyright">
            <p>© 2022 Kanye West. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;
