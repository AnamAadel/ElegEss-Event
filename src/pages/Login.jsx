import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import { AuthContexts } from "./context/AuthContext";


function Login() {
    const {signInUser} =  AuthContexts();
    const auth = getAuth(app);
    const userEmail = useRef()
    const handleSignInUser = (e)=> {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        

        signInUser(email, password)

    }
    const handleResetPassword = ()=> {
        const email = userEmail.current.value;
        console.log(email)
        sendPasswordResetEmail(auth, email ).then(()=> console.log("send email to reset password!")).catch((err1)=> console.log(err1));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignInUser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" ref={userEmail} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" />
                                <label className="label">
                                    <a className="label-text-alt link link-hover" onClick={handleResetPassword}>Forgot password?</a>
                                </label>
                            </div>
                            <p className='font-bold text-sm mt-2'>If You don not have already registered, Please <Link to="/login" className='text-blue-400'>Register.</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login