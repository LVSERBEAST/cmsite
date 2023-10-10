import { Container, Typography } from '@mui/material';

export default function About() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
                About
            </Typography>
            <Typography component="h1" variant="h5" align="justify" marginTop="45px" color="text.secondary" paragraph>
                Welcome to the world of artistry and imagination brought to life by Christopher Markgraf. With a passion for capturing the essence of people, places, and moments through custom drawn
                portraits, Christopher is an artist who thrives on turning your visions into timeless works of art.
            </Typography>
            <Typography component="h1" variant="h5" align="justify" marginTop="45px" color="text.secondary" paragraph>
                Christopher's journey in the art world began at a young age, and his dedication to honing his craft has led to a remarkable mastery of the medium. His ability to convey emotion, depth,
                and character in each stroke of the pencil is truly awe-inspiring.
            </Typography>
            <Typography component="h1" variant="h5" align="justify" marginTop="45px" color="text.secondary" paragraph>
                Every portrait Christopher creates is a testament to his commitment to excellence and his deep understanding of the stories behind each drawing. Whether you're seeking a portrait to
                commemorate a loved one, celebrate a milestone, or simply capture a moment of beauty, Christopher's artistic talent and personalized approach ensure that your vision is transformed
                into a captivating and unique masterpiece.
            </Typography>
        </Container>
    );
}
