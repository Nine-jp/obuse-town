import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const handleAttractionsClick = () => {
    navigate('/attractions');
  };

  const handleRestaurantsClick = () => {
    navigate('/restaurants');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        {lang === 'ja' ? '小布施観光ガイド' : lang === 'es' ? 'Guía de Obuse' : 'Obuse Tour Guide'}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        {lang === 'ja' ? '小布施観光ガイド' : lang === 'es' ? 'Guía de Obuse' : 'Obuse Tour Guide'}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card
            onClick={handleAttractionsClick}
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              cursor: 'pointer' 
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1506111583091-b0c41f3d6f80?auto=format&fit=crop&w=800&q=60"
              alt="観光地"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {lang === 'ja' ? '観光地' : lang === 'es' ? 'Atracciones' : 'Attractions'}
              </Typography>
              <Typography>
                {lang === 'ja' ? '小布施の主要な観光地をご紹介します。' : lang === 'es' ? 'Descubre los principales sitios turísticos de Obuse.' : 'Discover the main attractions of Obuse.'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            onClick={handleRestaurantsClick}
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              cursor: 'pointer' 
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=60"
              alt="レストラン"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {lang === 'ja' ? 'レストラン' : lang === 'es' ? 'Restaurantes' : 'Restaurants'}
              </Typography>
              <Typography>
                {lang === 'ja' ? 'おすすめのレストランをご紹介します。' : lang === 'es' ? 'Recomendaciones de restaurantes en Obuse.' : 'Recommended restaurants in Obuse.'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
