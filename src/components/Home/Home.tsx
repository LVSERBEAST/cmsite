import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import backgroundImage from '../../images/gallery1.jpg';

export default function Album() {
    return (
        <main>
            <Box
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    height: '80vh',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h3" align="center" color="text.primary" marginTop="150px" gutterBottom>
                        Christopher Markgraf
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        capturing your special moments and memories in beautifully crafted artwork
                    </Typography>
                </Container>
            </Box>
        </main>
    );
}