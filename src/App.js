import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';
import Events from './components/Events';
import { LanguageProvider } from './contexts/LanguageContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
