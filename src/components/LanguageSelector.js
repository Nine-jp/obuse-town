import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLang = (code) => {
    setLang(code);
    handleClose();
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick} size="large">
        <TranslateIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem selected={lang==='ja'} onClick={()=>changeLang('ja')}>日本語</MenuItem>
        <MenuItem selected={lang==='en'} onClick={()=>changeLang('en')}>English</MenuItem>
        <MenuItem selected={lang==='es'} onClick={()=>changeLang('es')}>Español</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
