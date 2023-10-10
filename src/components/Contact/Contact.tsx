import { Container, Typography } from '@mui/material';

export default function Contact() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
                Contact
            </Typography>
        </Container>
    );
}
