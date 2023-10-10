import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import images from './Images';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import styles from './Gallery.module.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { useState } from 'react';
import { Close } from '@mui/icons-material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    marginTop: '20px',
    p: 4
};

export default function Gallery() {
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [selectedItem, setSelectedzitem] = useState<number>(1);

  function handleClick(selectedImage: number) {
    setShowCarousel(true);
    setSelectedzitem(selectedImage);
  }

  return (
      <Container sx={{ py: 8 }} maxWidth="md">
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
                              onClick={() => handleClick(i)}
                          />
                      </Card>
                  </Grid>
              ))}
          </Grid>
          <Modal open={showCarousel} onClose={() => setShowCarousel(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                  <IconButton className={styles.close} onClick={() => setShowCarousel(false)}>
                      <Close />
                  </IconButton>
                  <ImageCarousel selectedItem={selectedItem}></ImageCarousel>
              </Box>
          </Modal>
      </Container>
  );
}