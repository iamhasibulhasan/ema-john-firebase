import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/**
 * Steps for authentication
 * Initial setup
 * 1. fire: create project
 * 2. create react app
 * 3. get config
 * 4. initialize firebase
 * 5. Enable auth method
 */