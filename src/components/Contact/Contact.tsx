import { Container, Typography } from '@mui/material';

export default function Contact() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
                Contact
            </Typography>
            <Typography component="h1" variant="h5" align="justify" marginTop="45px" color="text.secondary" paragraph>
                christopher.markgraf@gmail.com
            </Typography>
            <Typography component="h1" variant="h5" align="justify" marginTop="45px" color="text.secondary" paragraph>
                <a href="">facebook.com/christopher.markgraf</a>
            </Typography>
        </Container>
    );
}
