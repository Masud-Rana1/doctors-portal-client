import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";


//initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user , setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState(' ');
    const registerUser = (email, password,name, history) =>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase after creaction
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
    }

    const login = (email, password, location, history) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false));
    }


    useEffect(()=>{
      fetch(`https://immense-retreat-64247.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email]);

    const logOut = () => {
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(()=>setIsLoading(false));  
         };

         const signInWithGoogle = (location, history) => {
          setIsLoading(true);
          signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, "PUT")
    setAuthError('');

    const destination = location?.state?.from || '/';
    history.replace(destination);
    // ...
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(()=>setIsLoading(false));  ;
         }

         // observe user state
          useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {          
                  setUser(user);
                  getIdToken(user)
                  .then(idToken => {
                    setToken(idToken);
                  })
                } else {
                  setUser({});
                }
                setIsLoading(false);
              });
              return unsubscribe;
          },[auth])
 // to save user
            const saveUser = (email, displayName, method) => {
              const user = {email, displayName};
              fetch('https://immense-retreat-64247.herokuapp.com/users',{
                method: method,
                headers: {
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
              })
              .then()
            }
    return{
        user,
        isLoading,
        authError,
        admin,
        token,
        registerUser,
        signInWithGoogle,
        login,
        logOut,
        


    }
}
export default useFirebase;