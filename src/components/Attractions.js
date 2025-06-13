import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import attractionsData from '../data/attractions.json';
import { useLanguage } from '../contexts/LanguageContext';

const Attractions = () => {
  const { lang } = useLanguage();
  const title = lang === 'ja' ? '観光地' : lang === 'es' ? 'Atracciones' : 'Attractions';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {attractionsData.attractions.map((attraction) => (
          <Grid item xs={12} md={6} key={attraction.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={attraction.image.startsWith('http') ? attraction.image : `/images/${attraction.image}`}
                alt={attraction.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {lang === 'ja' ? attraction.name : attraction.name_en}
                </Typography>
                <Typography>
                  {lang === 'ja' ? attraction.description : attraction.description_en}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
                  {attraction.address}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                  <a href={attraction.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {attraction.link}
                  </a>
                </Typography>
                {attraction.social_links && (
                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    {attraction.social_links.facebook && (
                      <IconButton
                        component="a"
                        href={attraction.social_links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <Facebook color="primary" />
                      </IconButton>
                    )}
                    {attraction.social_links.twitter && (
                      <IconButton
                        component="a"
                        href={attraction.social_links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <Twitter color="primary" />
                      </IconButton>
                    )}
                    {attraction.social_links.instagram && (
                      <IconButton
                        component="a"
                        href={attraction.social_links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <Instagram color="primary" />
                      </IconButton>
                    )}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Attractions;
