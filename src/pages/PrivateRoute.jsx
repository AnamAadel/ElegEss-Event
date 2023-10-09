import { Navigate } from 'react-router-dom';
import { AuthContexts } from './context/AuthContext';

function PrivateRoute({children}) {
    const {user, loading} = AuthContexts();
  return (
    <>
        {user && children}
        {!user && <Navigate to="/register"></Navigate>}
        
    </>
  )
}

export default PrivateRoute