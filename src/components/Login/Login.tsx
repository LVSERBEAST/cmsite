import { Box, Button, Dialog, DialogContent, Snackbar, TextField } from "@mui/material";
import styles from './Login.module.css'
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

type LoginProps = {
    open: boolean;
    handleClose: () => void;
}

const Login = (props: LoginProps) => {
    const { open, handleClose } = props;
    const auth = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');

    async function login(email: string, password: string) {
        const result = await auth.loginUser(email, password);

        if (result === true) {
            setSnackbarMessage('Login successful!');
            setOpenSnackbar(true);
            handleClose();
        } else {
            setSnackbarMessage('Error logging in');
            setOpenSnackbar(true);
        }
    }

    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent className={styles.content}>
                    <Box textAlign="center">
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => {
                                setEmail(e.target.value as string);
                            }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPassword(e.target.value as string);
                            }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Button variant="contained" className={styles.button} onClick={() => login(email, password)}>
                            Login
                        </Button>
                        <Button variant="outlined" className={styles.button} onClick={handleClose}>
                            Cancel
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => {
                    setOpenSnackbar(false);
                }}
                message={snackbarMessage}
            />
        </>
    );
};
export default Login;