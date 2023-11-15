import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../Firbase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loader, setLoder] = useState(true)

    const [passwordError, setpasswordError] = useState(null)

    // for Registation

    const creatUser = (email, password) =>{
        setLoder(true)

        if (password.length < 6) {
            return setpasswordError('pls give at least six caracter')
        }

        else if(!/[A-Z]/.test(password)){

            return setpasswordError('pls give at least capital caracter')
        }
      
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            return setpasswordError('pls give at least specal caracter')
        } 

        else{
            setpasswordError('')
            return createUserWithEmailAndPassword(auth, email, password);

     }
    }

      // for Registation end


    //   Log in 

    const logInUser = (email, password) =>{
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log in end

    // Login with google

    const loginWithGoogle = () =>{
        setLoder(true)
        return signInWithPopup(auth, googleProvider)
    }

      // Login with google end

    useEffect(() =>{
        const unsubscrive = onAuthStateChanged(auth, (currentUser) =>{
               setUser(currentUser)  
               setLoder(false) ;

            //    If currentUser Exist

            if (currentUser) {
                
            }
               
        })
    
        return () =>{
            unsubscrive();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    // log out

    const logout = () =>{
        setLoder(true)
        signOut(auth)
    }
    

    const userInfo = {
    loader,
    creatUser,
    user,
    passwordError,
    logInUser,
    loginWithGoogle,
    logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {

    children: PropTypes.node
}