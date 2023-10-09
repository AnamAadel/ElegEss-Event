import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from 'react';
import { app } from "../../firebase.config";
const myContext = createContext(null);

export const AuthContexts = ()=> {
    return useContext(myContext);
}

function AuthContext({children}) {
    
    const [user, setUser] = useState(null)
    const [userPhoto, setUserPhoto] = useState(null);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const storage = getStorage(app)
  const authProviderGoogle = new GoogleAuthProvider();
  const authProviderGithub = new GithubAuthProvider();
  const authProviderFacebook = new FacebookAuthProvider();


  const createUser = (email, password, userName, file)=>{
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then(result => {
        // sendEmailVerification(auth.currentUser).then(()=> console.log("email varification send to  your email!")).catch(err => console.log(err))

        const storageRef = ref(storage, `users/${result.user.uid}.jpg`);
        
        console.log(storageRef.fullPath)

        
        uploadBytes(storageRef, file).then((snapshot)=> {
          
          getDownloadURL(storageRef).then((url => {

            console.log(url)
            setUserPhoto(url);
            setUserName(userName);
            
            updateProfile(auth.currentUser, {displayName: userName, photoURL: url}).then(() => {
              console.log("profile updated!")
              setLoading(false);
            }).catch(error => console.log(error));
          })).catch((err)=> console.log(err) )
            
          }).catch((err)=> console.log(err))

        setUser(result.user)
        console.log(result.user);
    }).catch(error => {
        console.log(error)
    })
    // const user = auth.currentUser;
  }

  const signInUser = (email, password)=>{
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then(result => {
        setUser(result.user)
      console.log(result);
      setLoading(false);
    }).catch(error => {
      console.log(error)
    })
  }

  const handleGoogleSignIn = ()=>{
    setLoading(true);
    signInWithPopup(auth, authProviderGoogle).then(result => {
      console.log(result);
      setUser(result.user)
      setLoading(false);
    }).catch(error => {
      console.log(error)
    })
  }

  const handleGithubSignIn = ()=>{
    setLoading(true);
    signInWithPopup(auth, authProviderGithub).then(result => {
      console.log(result);
      setUser(result.user)
      setLoading(false)
    }).catch(error => {
      console.log(error)
    })
  }

  const handleFacebookSignIn = ()=>{
    setLoading(true);
    signInWithPopup(auth, authProviderFacebook).then(result => {
      console.log(result);
      setUser(result.user)
      setLoading(false);
    }).catch(error => {
      console.log(error)
    })
  }


  const authValue = {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleFacebookSignIn,
    createUser,
    signInUser,
    user,
    loading,
    userPhoto,
    userName
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        console.log("auth called!");
        
        setUser(currentUser);
        setLoading(false)
    })
    
    return unsubscribe
  }, [auth])
  
  return (
    <myContext.Provider value={authValue}>
        {children}
    </myContext.Provider>
  )
}

export default AuthContext




// https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/users%2F6rJGWNnFjrQhuynfWwWUoEcvnte2.jpg?alt=media&token=bf4d122e-c0b8-4411-93f1-df44cdde1b72&_gl=1*8op1jm*_ga*OTM1NzMzNTM1LjE2ODQzODAzMDg.*_ga_CW55HF8NVT*MTY5NjIzNzA5Mi4yNi4xLjE2OTYyMzg3NDkuMzMuMC4w

// https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/users%2FQfqEepAXMDfZhmQ9kQVnZxTigq32.jpg?alt=media&token=97fefdec-5087-4a5d-9391-0bbde1d31038&_gl=1*1t5bx1c*_ga*OTM1NzMzNTM1LjE2ODQzODAzMDg.*_ga_CW55HF8NVT*MTY5NjIzNzA5Mi4yNi4xLjE2OTYyMzk0MzAuNDUuMC4w

// https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/users%2FdXUNUJ8XzyedNUfy98uzULiNZSg2.jpg?alt=media&token=48521f0e-7d0a-4909-8bbc-c3737634e69e&_gl=1*7xg8y0*_ga*OTM1NzMzNTM1LjE2ODQzODAzMDg.*_ga_CW55HF8NVT*MTY5NjIzNzA5Mi4yNi4xLjE2OTYyMzk1OTAuNjAuMC4w

// 48521f0e-7d0a-4909-8bbc-c3737634e69e