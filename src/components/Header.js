import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { lang } = useLanguage();
  const navAttractions = lang === 'ja' ? '観光地' : lang === 'es' ? 'Atracciones' : 'Attractions';
  const navRestaurants = lang === 'ja' ? 'レストラン' : lang === 'es' ? 'Restaurantes' : 'Restaurants';
  const navEvents = lang === 'ja' ? 'イベント' : lang === 'es' ? 'Eventos' : 'Events';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          小布施観光ガイド / Obuse Tour Guide
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/attractions">{navAttractions}</Button>
          <Button color="inherit" component={Link} to="/restaurants">{navRestaurants}</Button>
          <Button color="inherit" component={Link} to="/events">{navEvents}</Button>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
