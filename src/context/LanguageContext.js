// src/context/LanguageContext.js

/** { Component } LanguageContext 
 * @abstract LanguageContext is a wrapper class that contains the logic for switching languages and carrying the state across pages
 * 
 * @exports 
 *      @const { Component } LanguageProvider
 */
import React, { createContext, useState } from 'react';
import translations from '../translations';

// Create a language context to use across pages
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    /** changeLanguage(newLanguage)
     * @abstract takes in a new language and changes the state across the application.
     * @param { String[2] } newLanguage 
     */
    function changeLanguage(newLanguage) {
        sessionStorage.setItem('hasSelectedLanguage', 'true');
        setLanguage(newLanguage);
        document.getElementById('language-selector-container').style.display = 'none';
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};