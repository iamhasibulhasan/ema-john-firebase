import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/**
 * *Step-1 for authentication
 * @Initial setup
 * 1. fire: create project
 * 2. create react app
 * 3. get config
 * 4. initialize firebase
 * 5. Enable auth method
 *
 * *Step:2
 * 1. Create Login Component
 * 2. Create Register for Login and Register
 * 3. Create Route for Login and Register
 *
 * *Step-3
 * 1. Set up sign in
 * 2. Setup sign out method
 * 3. user state
 * 4. special observer
 */