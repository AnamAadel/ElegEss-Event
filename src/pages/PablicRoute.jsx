
import { Navigate } from 'react-router-dom'
import { AuthContexts } from './context/AuthContext'

function PablicRoute({children}) {
    const {user, loading} = AuthContexts()
  return (
    <>
        
        { !user && children }
        { user && <Navigate to="/"></Navigate>}
    </>
  )
}

export default PablicRoute