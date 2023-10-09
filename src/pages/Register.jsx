import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContexts } from "./context/AuthContext";

function Register() {
    const {handleGoogleSignIn, handleGithubSignIn, handleFacebookSignIn, user, createUser} =  AuthContexts();

    const handleCreateUser = (e)=> {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userName = e.target.userName.value;
        const file = e.target.file.files[0]

        console.log(file)
        // console.log(password)
        // console.log(userName)

        createUser(email, password, userName, file)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                        
        <div className="flex gap-4 border-4 rounded-lg border-gray-900 text-5xl p-6">
        <FcGoogle onClick={handleGoogleSignIn} className="cursor-pointer" />
        <BsGithub onClick={handleGithubSignIn} className="cursor-pointer" />
        <BsFacebook onClick={handleFacebookSignIn} className="cursor-pointer" />
        </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleCreateUser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName' placeholder="User Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />
                            </div>
                            <div className="form-control">
                                <input type="file" className="input input-bordered" name='file' />
                                <p className='font-bold text-sm mt-2'>If You have already registered, Please <Link to="/register" className='text-blue-400'>Log in.</Link></p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register