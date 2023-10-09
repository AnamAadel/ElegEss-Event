
import { Navigate } from 'react-router-dom';
import { AuthContexts } from '../components/context/AuthContext';

function PablicRoute({children}) {
    const {user} = AuthContexts()
  return (
    <>
        
        { !user && children }
        { user && <Navigate to="/"></Navigate>}
    </>
  )
}

export default PablicRoute