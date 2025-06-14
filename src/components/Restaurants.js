import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import restaurantsData from '../data/restaurants.json';
import { useLanguage } from '../contexts/LanguageContext';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const Restaurants = () => {
  const { lang } = useLanguage();
  const title = lang === 'ja' ? 'レストラン' : lang === 'es' ? 'Restaurantes' : 'Restaurants';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {restaurantsData.restaurants.map((restaurant) => (
          <Grid item xs={12} md={6} key={restaurant.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={restaurant.image.startsWith('http') ? restaurant.image : `/images/${restaurant.image}`}
                alt={restaurant.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {lang === 'ja' ? restaurant.name : restaurant.name_en}
                </Typography>
                <Typography>
                  {lang === 'ja' ? restaurant.description : restaurant.description_en}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
                  {restaurant.address}
                </Typography>
                {restaurant.link && (
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
                    <Link href={restaurant.link} target="_blank" rel="noopener noreferrer">
                      {lang === 'ja' ? '公式サイト' : 'Official Website'}
                    </Link>
                  </Typography>
                )}
                {lang !== 'ja' && (
                  <Typography variant="subtitle1" color="text.secondary">
                    Cuisine: {restaurant.cuisine}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Restaurants;
