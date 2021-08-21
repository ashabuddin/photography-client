import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
                console.log(signedInUser);

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="from-group mt-5">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;