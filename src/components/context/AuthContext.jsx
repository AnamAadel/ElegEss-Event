import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { app } from "../../firebase.config";
const myContext = createContext(null);

export const AuthContexts = ()=> {
    return useContext(myContext);
}

function AuthProvider({children}) {
    
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
      toast.success("User login successfully!",{
        theme: "colored",
        toastId: "success"

    });
    }).catch(error => {
      console.log(error)
      toast.warn(`${error}`,{
        theme: "colored"
    });
    })
  }

  const logOutUser = ()=> {
    signOut(auth).then(() => {
      // 
      toast.success("Sign-out successful.",{
        theme: "colored",
        toastId: "success"
    });
    }).catch((error) => {
      // An error happened.
      toast.warn(`An error happened`,{
        theme: "colored"
    });
    });
  }
  const handleGoogleSignIn = ()=>{
    setLoading(true);
    signInWithPopup(auth, authProviderGoogle).then(result => {
      setUser(result.user)
      setLoading(false);
      toast.success("Login successfully!",{
        theme: "colored",
        toastId: "success"

    });
      
    }).catch(error => {
      console.log(error)
      toast.warn(`An error happened`,{
        theme: "colored"
    });
    })
  }

  const handleGithubSignIn = ()=>{
    setLoading(true);
    signInWithPopup(auth, authProviderGithub).then(result => {
      console.log(result);
      setUser(result.user)
      setLoading(false)
      toast.success("User login successfully!",{
        theme: "colored",
        toastId: "success"

    });
    }).catch(error => {
      console.log(error)
      toast.warn(`An error happened`,{
        theme: "colored"
    });
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
    logOutUser,
    user,
    loading,
    userPhoto,
    userName
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        console.log(currentUser);
        
        setUser(currentUser);
        setUserPhoto(currentUser?.photoURL)
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

export default AuthProvider




