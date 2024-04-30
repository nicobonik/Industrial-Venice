// src/components/Footer.js

/** { Component } Footer 
 * 
 * @abstract Footer that appears at the bottom of most pages. 
 * 
 * @exports 
 *      @const { Component } Footer 
 */

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Language context
import { LanguageContext } from '../context/LanguageContext.js';

// Stylesheets
import '../css/components/Footer.css'; 

const Footer = () => {
    const { t, language } = useContext(LanguageContext);
    return (
        <div className='footer'>
            <Link to='/' className='footer-link'>
                <div className='footer-button'>{ t('goToHome') }</div>
            </Link>
            <Link to='/industrial-sites' className='footer-link'>
                <div className='footer-button'>{ t('goToIndustrialSites') }</div>
            </Link>
            <Link to='/industrial-stories' className='footer-link'>
                <div className='footer-button'>{ t('goToStories') }</div>
            </Link>
            <hr className='footer-hr'></hr>
        </div>
    );
};

export default Footer;