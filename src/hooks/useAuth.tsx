import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD2fysJcaPcQup12Sza56kFAls2VNor-cA',
    authDomain: 'cmsite-51267.firebaseapp.com',
    projectId: 'cmsite-51267',
    storageBucket: 'cmsite-51267.appspot.com',
    messagingSenderId: '76931508086',
    appId: '1:76931508086:web:ade65ab41f47fbef1dfc57',
    measurementId: 'G-65VP774H7W'
};

const app = firebase.initializeApp(firebaseConfig);

export const useAuth = () => {
    const userLoggedIn = async () => {
        try {
            await firebase.auth().currentUser;
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const getCurrentUser = async () => {
        try {
            return await firebase.auth().currentUser;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const loginUser = async (email: string, password: string) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            return true;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        userLoggedIn,
        getCurrentUser,
        loginUser
    };
};

export default useAuth;
