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
 * *Step:2 setup component
 * 1. Create Login Component
 * 2. Create Register for Login and Register
 * 3. Create Route for Login and Register
 *
 * *Step-3 setup auth system
 * 1. Set up sign in
 * 2. Setup sign out method
 * 3. user state
 * 4. special observer
 * 5. return necessary methods and states from useFirebase
 *
 * *Step- 4 useAuth context hook
 * 1. create a auth context
 * 2. create context provider
 * 3. set context provider context value
 * 4. use auth provider
 * 5. create useAuth hook
 * 
 * *Step 5 create private route
 * 1. create private route
 * 2. set private route
 *
 */