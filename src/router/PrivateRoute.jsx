import { Navigate } from 'react-router-dom';
import { AuthContexts } from '../components/context/AuthContext';

function PrivateRoute({children}) {
    const {user} = AuthContexts();
  return (
    <>
        {user && children}
        {!user && <Navigate to="/register"></Navigate>}
        
    </>
  )
}

export default PrivateRoute