import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext({ lang: 'ja', setLang: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ja');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
