import { Container, Link, Typography } from '@mui/material';
import styles from './Contact.module.css'
import { emailLink, facebookLink, instagramLink } from '../../utilities/constants';

export default function Contact() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
                Contact
            </Typography>
            <Typography component="h1" variant="h6" align="center" marginTop="45px" color="text.secondary" paragraph>
                <Link href={emailLink} className={styles.link} underline={'none'}>
                    christopher.markgraf@gmail.com
                </Link>
            </Typography>
            <Typography component="h1" variant="h6" align="center" marginTop="10px" color="text.secondary" paragraph>
                <Link href={facebookLink} className={styles.link} underline={'none'} target={'blank'}>
                    facebook.com/christopher.markgraf
                </Link>
            </Typography>
            <Typography component="h1" variant="h6" align="center" marginTop="10px" color="text.secondary" paragraph>
                <Link href={instagramLink} className={styles.link} underline={'none'} target={'blank'}>
                    instagram.com/christopher.markgraf
                </Link>
            </Typography>
        </Container>
    );
}
