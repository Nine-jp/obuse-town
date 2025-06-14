import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';

const MapViewer = () => {
  return (
    <Box sx={{ mt: 4, mx: 2 }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          小布施町観光地図
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          小布施町の観光スポットが一目でわかる地図です。
          ダウンロードボタンからPDFを保存できます。
        </Typography>
        <IconButton
          color="primary"
          aria-label="download"
          component="a"
          href="/images/map_2025.pdf"
          download
          sx={{ ml: 1 }}
        >
          <Download />
        </IconButton>
      </Paper>

      <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', mt: 2 }}>
        <img 
          src="/images/map_2025.pdf" 
          alt="小布施町観光地図" 
          style={{ width: '100%', maxWidth: '1000px' }}
        />
      </Box>
    </Box>
  );
};

export default MapViewer;
