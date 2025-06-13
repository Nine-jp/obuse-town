import React from 'react';
import { Container, Typography, List, ListItemButton, ListItemText } from '@mui/material';
import eventsData from '../data/events.json';
import { useLanguage } from '../contexts/LanguageContext';

const Events = () => {
  const { lang } = useLanguage();

  const title = lang === 'ja' ? 'イベント' : lang === 'es' ? 'Eventos' : 'Events';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <List>
        {eventsData.events.map((ev) => (
          <ListItemButton key={ev.id} component="a" href={ev.link} target="_blank" rel="noopener noreferrer">
            <ListItemText
              primary={lang === 'ja' ? ev.title_ja : lang === 'es' ? ev.title_es : ev.title_en}
              secondary={ev.date}
            />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default Events;
