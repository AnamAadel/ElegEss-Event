import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import noUserPhoto from "../../assets/user.png";
import { AuthContexts } from '../../components/context/AuthContext';

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const checkInput = useRef();
  const navbar = useRef(null);
  const { user, userPhoto, logOutUser, userName } = AuthContexts();
  console.log(user?.photoURL);

  function handleMenu() {
    if (window.innerWidth < 768) {
      checkInput.current.checked = false;
      setShowMenu(checkInput.current.checked)
    }

  }


  useEffect(() => {
    window.onresize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setShowMenu(checkInput.current.checked)
      } else {
        setShowMenu(true)

      }

    }

    if (window.innerWidth < 768) {
      setShowMenu(false)
    }

    window.addEventListener("scroll", () => {
      const scrolling = window.scrollY;
      if (scrolling > 200) {
        navbar.current.classList.add("fixed")
        navbar.current.classList.remove("relative")
      } else {
        navbar.current.classList.remove("fixed")
        navbar.current.classList.add("relative")

      }
    })
  }, [])

  return (
    <div className="navbar rounded-none relative top-0 left-0 z-40 bg-primary" ref={navbar} >
      <div className="flex-1 " >
        <Link to="/" className="btn btn-ghost normal-case text-xl bg-dark"><img src={logo} alt="Logo" className='h-full' /></Link>
      </div>
      <div className="flex-none ">
        <ul className={`menu shadow-xl md:shadow-none md:w-auto w-full absolute top-full transition-all rounded-none duration-500 right-0 flex-nowrap md:static md:menu-horizontal px-1  ${!showMenu ? "h-0 overflow-hidden p-0" : "h-[150px] md:h-auto overflow-auto"} bg-primary`} >
          <li onClick={handleMenu}><NavLink to={`/`}>Home</NavLink></li>
          <li onClick={handleMenu}><NavLink to={`/blogs/1`}>Blogs</NavLink></li>
          <li><NavLink to="/purchases">Purchase Details</NavLink></li>
          <li onClick={handleMenu}><NavLink to={`/contact`}>Contact Us</NavLink></li>
        </ul>


        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full">
            <img src={user ? userPhoto : noUserPhoto} />
          </div> */}
            <div className="w-10 rounded-full">
              <img src={userPhoto ? userPhoto : noUserPhoto} />
            </div>
          </label>
          <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-center space-y-4">
            <div className="w-10 rounded-full mx-auto">
              {/* <img src={user ?  user?.photoURL : userPhoto ? userPhoto : noUserPhoto} /> */}
              <img src={userPhoto ? userPhoto : noUserPhoto} />
            </div>
            <h3 className='text-lg font-semibold'>{user ? `Hi! ${userName || user.displayName}` : "What's up, bro?"} </h3>
            {user ?
              <button className='btn bg-dark text-white hover:bg-dark' onClick={logOutUser}>Logout</button>
              :
              <div className='flex flex-col'>
                <Link to={`/register`} className='btn bg-dark text-white hover:bg-dark' >Register</Link>
                <span className='font-bold'>OR</span>
                <Link to={`/login`} className='btn bg-dark text-white hover:bg-dark' >Log in</Link>
              </div>
            }
          </div>
        </div>
        <label className="btn btn-circle bg-white swap swap-rotate md:hidden" onClick={() => setShowMenu(checkInput.current.checked)} >

          {/* this hidden checkbox controls the state */}
          <input type="checkbox" ref={checkInput} />

          {/* hamburger icon */}
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

          {/* close icon */}
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

        </label>
      </div>
    </div>

  )
}

export default Navbar