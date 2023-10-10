import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import images from './Images';
import { Typography } from '@mui/material';
import styles from './Gallery.module.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { useState } from 'react';

export default function Gallery() {
  const [showCarousel, setShowCarousel] = useState<boolean>(false);

  return (
      <Container sx={{ py: 8 }} maxWidth="md">
          {!showCarousel && (
              <>
                  <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
                      Gallery
                  </Typography>
                  <Grid container spacing={4}>
                      {images.map((card, i) => (
                          <Grid item key={card} xs={12} sm={6} md={4}>
                              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                  <CardMedia
                                      component="div"
                                      sx={{
                                          pt: '100%'
                                      }}
                                      image={images[i]}
                                      className={styles.zoom}
                                      onClick={() => setShowCarousel(true)}
                                  />
                              </Card>
                          </Grid>
                      ))}
                  </Grid>
              </>
          )}

          {showCarousel && <ImageCarousel></ImageCarousel>}
      </Container>
  );
}